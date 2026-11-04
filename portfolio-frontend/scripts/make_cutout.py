import zlib, struct, os
import numpy as np
from scipy.ndimage import (
    binary_fill_holes, binary_dilation, binary_erosion,
    gaussian_filter, label
)

def load_rgba(path):
    with open(path, 'rb') as f: data = f.read()
    pos = 8
    idat = bytearray()
    w = h = 0
    while pos < len(data):
        l, = struct.unpack('>I', data[pos:pos+4])
        t, c = data[pos+4:pos+8], data[pos+8:pos+8+l]
        pos += 12 + l
        if t == b'IHDR': w, h = struct.unpack('>II', c[:8])
        elif t == b'IDAT': idat.extend(c)
        elif t == b'IEND': break
    raw = zlib.decompress(idat)
    img = np.zeros((h, w, 4), dtype=np.uint8)
    stride = 1 + w * 4
    for y in range(h):
        line = raw[y*stride : (y+1)*stride]
        ft = line[0]
        row = np.frombuffer(line[1:], dtype=np.uint8).copy()
        if ft == 1:
            for i in range(4, len(row)): row[i] = (int(row[i]) + int(row[i-4])) & 0xFF
        elif ft == 2:
            pr = img[y-1].flatten() if y > 0 else np.zeros(w*4, dtype=np.uint8)
            row = (row.astype(np.uint16) + pr) & 0xFF
        elif ft == 3:
            pr = img[y-1].flatten() if y > 0 else np.zeros(w*4, dtype=np.uint8)
            for i in range(len(row)):
                left = row[i-4] if i >= 4 else 0
                row[i] = (int(row[i]) + ((int(left) + int(pr[i])) >> 1)) & 0xFF
        elif ft == 4:
            pr = img[y-1].flatten() if y > 0 else np.zeros(w*4, dtype=np.uint8)
            for i in range(len(row)):
                a = row[i-4] if i >= 4 else 0
                b = pr[i]
                c = (img[y-1, (i-4)//4, (i-4)%4] if (y > 0 and i >= 4) else 0)
                p = int(a) + int(b) - int(c)
                pa, pb, pc = abs(p - int(a)), abs(p - int(b)), abs(p - int(c))
                r = a if (pa <= pb and pa <= pc) else (b if pb <= pc else c)
                row[i] = (int(row[i]) + int(r)) & 0xFF
        img[y] = row.reshape((w, 4))
    return img, w, h

def save_png(path, img):
    h, w, _ = img.shape
    raw = bytearray()
    for y in range(h):
        raw.append(0)
        raw.extend(img[y].tobytes())
    compressed = zlib.compress(bytes(raw), 6)
    with open(path, 'wb') as f:
        f.write(b'\x89PNG\r\n\x1a\n')
        ihdr = struct.pack('>IIBBBBB', w, h, 8, 6, 0, 0, 0)
        f.write(struct.pack('>I', len(ihdr)) + b'IHDR' + ihdr + struct.pack('>I', zlib.crc32(b'IHDR' + ihdr)))
        f.write(struct.pack('>I', len(compressed)) + b'IDAT' + compressed + struct.pack('>I', zlib.crc32(b'IDAT' + compressed)))
        f.write(struct.pack('>I', 0) + b'IEND' + struct.pack('>I', zlib.crc32(b'IEND')))

def create_cutout(input_path, output_path):
    img, w, h = load_rgba(input_path)
    rgb = img[:, :, :3].astype(np.float32)
    
    # In profile.jpg.png, the person is in the center, and the background is dark slate [15..22, 19..28, 20..27]
    # Let's compute background mask from borders
    # Border samples:
    # Corner regions:
    corners = np.zeros((h, w), dtype=bool)
    corners[:60, :] = True
    corners[:, :60] = True
    corners[:, -60:] = True
    
    # Also background color estimate
    bg_ref = np.median(rgb[corners], axis=0) # ~ [15, 19, 20]
    
    # Let's find foreground:
    # Face skin, shirt, hair green rim all have distinct properties from bg_ref
    # Background has very low saturation and low value (V < 30)
    # The shirt has high intensity [100..200]
    # Face skin has high R [100..180], G [70..130], B [50..100]
    # Hair has curls with green rim [15..60, 25..85, 20..60] or very dark curls [4..12, 8..16, 6..14]
    
    # Distance to background:
    diff = np.abs(rgb - bg_ref)
    bg_dist = np.max(diff, axis=-1)
    
    # Seeds for background (flood from edges):
    from scipy.ndimage import distance_transform_edt
    
    # Initial background estimate: pixels within radius from corners with low distance
    is_bg = (bg_dist < 12.0)
    
    # Also outside circular vignette is definitely outside:
    cy, cx = 512, 512
    Y, X = np.ogrid[:h, :w]
    dist_from_center = np.sqrt((X - cx)**2 + (Y - cy)**2)
    
    # In the original image, there is a circular mask at r ~ 470, but Pralad's torso continues down
    # Let's find foreground seed:
    # Face region (cy=400..550, cx=400..624):
    fg_seed = np.zeros((h, w), dtype=bool)
    fg_seed[350:600, 420:600] = (bg_dist[350:600, 420:600] > 40)
    # Shirt region (cy=700..950, cx=300..724):
    fg_seed[700:950, 300:724] = (bg_dist[700:950, 300:724] > 50)
    
    # Grow foreground seed:
    # Any pixel connected to fg_seed that is not background
    # Hair is inside upper bounding box, connected to forehead
    # Let's use simple region growing or thresholding:
    # Foreground criteria:
    # Not background
    not_bg = (bg_dist > 8.0)
    
    # Also in hair region, hair curls are darker than bg [7, 12, 8] vs bg [16, 21, 23]
    # Dark hair: rgb[:,:,1] < 16, but surrounded by forehead or curls
    # Let's label connected components of not_bg:
    labeled, num_features = label(not_bg)
    # Find which components touch fg_seed:
    touching_labels = set(labeled[fg_seed])
    touching_labels.discard(0)
    
    fg_mask = np.isin(labeled, list(touching_labels))
    
    # Fill holes in fg_mask:
    fg_mask = binary_fill_holes(fg_mask)
    
    # Also include the hair between forehead and top:
    # Hair is bounded by y: 40 to 350, x: 260 to 760
    hair_box = np.zeros((h, w), dtype=bool)
    hair_box[40:350, 260:760] = True
    # Hair pixels have green rim or dark curl:
    hair_pixels = hair_box & ((rgb[:,:,1] > 28) | (rgb[:,:,0] < 12)) & (dist_from_center < 480)
    fg_mask = fg_mask | hair_pixels
    fg_mask = binary_fill_holes(fg_mask)
    
    # Clean up mask with closing/opening:
    fg_mask = binary_dilation(fg_mask, iterations=2)
    fg_mask = binary_fill_holes(fg_mask)
    fg_mask = binary_erosion(fg_mask, iterations=2)
    
    # Remove any stray components outside main body:
    labeled_final, _ = label(fg_mask)
    main_label = labeled_final[500, 512]
    fg_mask = (labeled_final == main_label)
    fg_mask = binary_fill_holes(fg_mask)
    
    # Generate clean white sticker border around Pralad:
    # Sticker border width: 14 pixels
    sticker_mask = binary_dilation(fg_mask, iterations=14)
    # Smooth sticker outline slightly:
    sticker_float = gaussian_filter(sticker_mask.astype(float), sigma=1.5) > 0.45
    
    # Create final RGBA image:
    out = np.zeros((h, w, 4), dtype=np.uint8)
    
    # Sticker border color = crisp off-white #FEFDF9
    border_color = np.array([254, 253, 249, 255], dtype=np.uint8)
    out[sticker_float] = border_color
    
    # Inside fg_mask: original image pixels with full alpha
    out[fg_mask, :3] = img[fg_mask, :3]
    out[fg_mask, 3] = 255
    
    # Crop to bounding box with small margin:
    y_indices, x_indices = np.where(sticker_float)
    y_min, y_max = max(0, y_indices.min() - 10), min(h, y_indices.max() + 10)
    x_min, x_max = max(0, x_indices.min() - 10), min(w, x_indices.max() + 10)
    cropped = out[y_min:y_max, x_min:x_max]
    
    save_png(output_path, cropped)
    print(f"Saved sticker cutout to {output_path}, size {cropped.shape[1]}x{cropped.shape[0]}")

if __name__ == '__main__':
    create_cutout(
        'portfolio-frontend/public/profile.jpg.png',
        'portfolio-frontend/public/pralad-cutout.png'
    )
