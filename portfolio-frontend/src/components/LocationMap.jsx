import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { profile } from '@/data/profile';

// Custom neon pin icon
const customIcon = L.divIcon({
  className: '',
  html: `
    <div style="
      width: 20px;
      height: 20px;
      background: #00f5ff;
      border: 2px solid #ff006e;
      border-radius: 50%;
      box-shadow: 0 0 15px rgba(0,245,255,0.8), 0 0 30px rgba(0,245,255,0.4);
      position: relative;
    ">
      <div style="
        position: absolute;
        bottom: -12px;
        left: 50%;
        transform: translateX(-50%);
        width: 2px;
        height: 12px;
        background: linear-gradient(to bottom, #00f5ff, transparent);
      "></div>
    </div>
  `,
  iconSize: [20, 32],
  iconAnchor: [10, 32],
  popupAnchor: [0, -32],
});

export default function LocationMap() {
  return (
    <MapContainer
      center={[profile.location.latitude, profile.location.longitude]}
      zoom={13}
      style={{ width: '100%', height: '100%' }}
      className="rounded-xl"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker
        position={[profile.location.latitude, profile.location.longitude]}
        icon={customIcon}
      >
        <Popup>
          <div className="p-1">
            <p className="font-bold text-sm">{profile.fullName}</p>
            <p className="text-xs text-gray-600">{profile.location.address}</p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
