import sys, os
import numpy as np
from scipy.ndimage import (
    binary_fill_holes, binary_dilation, binary_erosion,
    gaussian_filter, label
)

sys.path.insert(0, os.path.dirname(__file__))
from make_cutout import load_rgba, save_png

def generate_clean_cutout(input_path, output_path):
    img, w, h = load_rgba(input_path)
    rgb = img[:, :, :3].astype(np.float32)
    max_val = rgb.max(axis=-1)
    Y, X = np.ogrid[:h, :w]

    # Skin tones (face & neck)
    skin = (rgb[:, :, 0] > 60) & (rgb[:, :, 0] > rgb[:, :, 2] + 8) & (max_val > 55)
    
    # Shirt & Collar (y > 600)
    shirt = (max_val > 45) & (Y >= 620)
    
    # Hair (y: 40..380, x: 250..770)
    hair_region = (Y >= 40) & (Y <= 380) & (X >= 250) & (X <= 770)
    hair_candidate = hair_region & (
        (rgb[:, :, 1] > 28) |
        (max_val > 30) |
        (rgb[:, :, 0] < 15)
    )
    
    fg_initial = skin | shirt | hair_candidate
    
    # Background boundaries
    # Upper left/right
    fg_initial[(Y < 650) & ((X < 240) | (X > 780))] = False
    
    # Neck borders
    fg_initial[(Y >= 480) & (Y <= 650) & ((X < 310) | (X > 710)) & (max_val < 65)] = False
    
    # Bottom vignette: keep down to y = 920
    fg_initial[920:, :] = False
    # Shoulder left/right bounds
    fg_initial[(Y >= 650) & (X < 110)] = False
    fg_initial[(Y >= 650) & (X > 910)] = False

    # Connect components
    fg_connected = binary_dilation(fg_initial, iterations=8)
    fg_connected = binary_fill_holes(fg_connected)
    
    labeled, _ = label(fg_connected)
    main_label = labeled[500, 512]
    fg_mask = (labeled == main_label)
    
    # Erode back by 8 to restore true outline
    fg_mask = binary_erosion(fg_mask, iterations=8)
    # Refine with morphological close
    fg_mask = binary_dilation(fg_mask, iterations=3)
    fg_mask = binary_fill_holes(fg_mask)
    fg_mask = binary_erosion(fg_mask, iterations=3)
    
    # Clean bottom cut at y=920
    fg_mask[915:, :] = False
    
    # Sticker outline: 14 pixels
    sticker_mask = binary_dilation(fg_mask, iterations=14)
    # Make bottom of sticker align flat/neat
    sticker_mask[925:, :] = False

    # Smooth sticker outline
    sticker_float = gaussian_filter(sticker_mask.astype(float), sigma=1.2) > 0.45

    out = np.zeros((h, w, 4), dtype=np.uint8)
    # Crisp white sticker border
    out[sticker_float] = [255, 255, 255, 255]
    # Forehead/person
    out[fg_mask, :3] = img[fg_mask, :3]
    out[fg_mask, 3] = 255
    
    # Crop to bounds
    y_idx, x_idx = np.where(sticker_float)
    ymin, ymax = max(0, y_idx.min() - 6), min(h, y_idx.max() + 6)
    xmin, xmax = max(0, x_idx.min() - 6), min(w, x_idx.max() + 6)
    cropped = out[ymin:ymax, xmin:xmax]
    
    save_png(output_path, cropped)
    print(f"Generated clean cutout with shirt: {output_path} ({cropped.shape[1]}x{cropped.shape[0]})")

if __name__ == '__main__':
    generate_clean_cutout(
        'portfolio-frontend/public/profile.jpg.png',
        'portfolio-frontend/public/pralad-cutout.png'
    )
