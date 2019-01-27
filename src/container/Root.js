import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import Body from './Body';
import Sidebar from './Sidebar';

function mapStateToProps(state) {
  return {
    pathname: state.router.location.pathname
  };
}

function Root({pathname}) {
  return (
    <React.Fragment>
      <Sidebar pathname={pathname} />
      <Body pathname={pathname} />
    </React.Fragment>
  );
}

Root.propTypes = {
  pathname: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(Root);
