import React from 'react';
import _Icon from '@mdi/react';

export default function Icon({...props}) {
  // TODO: move away default color
  return (
    <_Icon className="icon" {...props} />
  );
}
