import { ReactElement } from 'react';
import { Status } from '@googlemaps/react-wrapper';

const Loader = (status: Status): ReactElement => (
  status === Status.FAILURE
    ? <span>Failed to load map!</span>
    : <span>Loading...</span>
);

export default Loader;
