import PropTypes from 'prop-types';
import React from 'react';
// import Icon from './Icon';
// import { mdiPlus, mdiEqual } from '@mdi/js';

import { useConsole } from  'util/hooks';

export default function Console({...props}) {
  const [warnings] = useConsole();
  return (
    <div className="console" {...props}>
      {
        warnings
      }
    </div>
  );
}

Console.propTypes = {
  children: PropTypes.any
};
