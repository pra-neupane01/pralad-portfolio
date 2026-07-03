import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { profile } from '@/data/profile';

const customIcon = L.icon({
  iconUrl: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%232d9b7f" width="40" height="40"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.94 8.75 8.75 8.75 0 0 0 0 0 0h0v-3.5h-.75c-2.84 0-5.25-2.41-5.25-5.25s2.41-5.25 5.25-5.25 5.25 2.41 5.25 5.25v.75h3.5v-.75C22 6.48 17.52 2 12 2z"/></svg>',
  shadowUrl: null,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

export default function LocationMap() {
  return (
    <MapContainer
      center={[profile.location.latitude, profile.location.longitude]}
      zoom={13}
      style={{ width: '100%', height: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap'
      />
      <Marker position={[profile.location.latitude, profile.location.longitude]} icon={customIcon}>
        <Popup>
          <div className="p-2">
            <p className="font-bold text-text-dark">{profile.fullName}</p>
            <p className="text-xs text-text-dark">{profile.location.address}</p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
