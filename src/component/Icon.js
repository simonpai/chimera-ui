import React from 'react';
import _Icon from '@mdi/react';

export default function Icon({...props}) {
  return (
    <_Icon className="ch-icon" color="#667" {...props} />
  );
}
