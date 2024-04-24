import { FC, useEffect, useRef } from 'react';
import { MarkerManager } from '@googlemaps/markermanager';
import { PARKS } from 'data';

interface MapProps {
  options: google.maps.MapOptions;
}

const Map: FC<MapProps> = ({ options }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const map = new google.maps.Map(ref.current, options);
      const manager = new MarkerManager(map, {});

      google.maps.event.addListener(manager, 'loaded', async () => {
        const { AdvancedMarkerElement, PinElement } = (
          await google.maps.importLibrary('marker') as google.maps.MarkerLibrary
        );
        const infoWindow = new google.maps.InfoWindow();


        PARKS.forEach(({ title, lat, lng }) => {
          const position = { lat, lng };
          const pin = new PinElement({
            borderColor: 'black',
            background: '#7C3F00',
            glyphColor: 'green'
          });
          const marker = new AdvancedMarkerElement({
            map,
            title,
            position,
            content: pin.element
          });

          marker.addListener('click', () => {
            infoWindow.close();
            infoWindow.setContent(marker.title);
            infoWindow.open(marker.map, marker);
          });
        });

        manager.refresh();
      });
    }
  }, [ref, options]);

  return <div ref={ref} id="map" />;
};

export default Map;
