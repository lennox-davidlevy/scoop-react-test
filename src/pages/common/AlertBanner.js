import { BackgroundColor } from 'jest-matcher-utils/node_modules/chalk';
import React from 'react';
import Alert from 'react-bootstrap/Alert';

const AlertBanner = ({ message, variant }) => {
  const alertMessage =
    message || 'An unexpected error ocurred. Please try again later';
  const alertVariant = variant || 'danger';
  return (
    <Alert variant={variant} style={{ backgroundColor: 'red' }}>
      {alertMessage}
    </Alert>
  );
};

export default AlertBanner;
