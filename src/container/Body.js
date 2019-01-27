import PropTypes from 'prop-types';
import React from 'react';

import { param2pascal } from '../util/strings';

function normalizePath(pathname) {
  const segments = pathname.split('/').filter(s => s.length);
  const len = segments.length;
  if (!len) {
    return '_Kitchen';
  }
  segments[len - 1] = param2pascal(segments[len - 1]);
  return segments.join('/');
}

function Body({pathname}) {
  pathname = normalizePath(pathname);
  const Component = require('../inventory/' + pathname).default;
  return (
    <div id="body">
      <div>
        <Component />
      </div>
    </div>
  );
}

Body.propTypes = {
  pathname: PropTypes.string.isRequired
};

export default Body;
