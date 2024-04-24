import { FC } from 'react';
import { Wrapper as GoogleMapsWrapper } from '@googlemaps/react-wrapper';
import Loader from './Loader';
import Map from './Map';

const { VITE_GOOGLE_MAPS_API_KEY } = import.meta.env;

const Home: FC = () => {
  const options: google.maps.MapOptions = {
    mapId: "us-parks-map",
    center: { lat: 37.0902, lng: -95.7129 },
    zoom: 3
  };

  return (
    <GoogleMapsWrapper apiKey={VITE_GOOGLE_MAPS_API_KEY} render={Loader}>
      <Map options={options} />
    </GoogleMapsWrapper>
  );
};

export default Home;
