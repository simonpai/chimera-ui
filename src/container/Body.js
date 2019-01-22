import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { param2pascal } from '../util/cases';

function mapStateToProps(state) {
  return {
    pathname: state.router.location.pathname
  };
}

function normalizePath(pathname) {

  const segments = pathname.split('/').filter(s => s.length);
  const len = segments.length;
  if (!len) {
    return 'Home';
  }
  segments[len - 1] = param2pascal(segments[len - 1]);
  return segments.join('/');
}

function Body({pathname}) {
  pathname = normalizePath(pathname);
  const Component = require('../section/' + pathname).default;
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

export default connect(mapStateToProps)(Body);
