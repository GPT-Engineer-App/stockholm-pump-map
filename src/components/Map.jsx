import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Box } from '@chakra-ui/react';
import L from 'leaflet';

// Fix for default icon issue with Leaflet and Webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const pumps = [
  { id: 1, name: 'Pump 1', position: [59.3293, 18.0686] },
  { id: 2, name: 'Pump 2', position: [59.3326, 18.0649] },
  { id: 3, name: 'Pump 3', position: [59.3340, 18.0700] },
];

const Map = () => {
  return (
    <Box height="100vh" width="100%">
      <MapContainer center={[59.3293, 18.0686]} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {pumps.map(pump => (
          <Marker key={pump.id} position={pump.position}>
            <Popup>{pump.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </Box>
  );
};

export default Map;