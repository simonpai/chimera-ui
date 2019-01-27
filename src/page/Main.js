// import PropTypes from 'prop-types';
import React from 'react';
import { Switch, Route } from 'react-router';

import Root from '../container/Root';

function MainPage() {
  return (
    <div id="main">
      {/*}
      <div id="sidebar">
        <div className="ui borderless compact fluid inverted vertical menu">
          <div className="item">
            <div className="header">Introduction</div>
            <div className="menu">
              <a class="item" href="/">Introduction</a>
              <a class="item" href="/usage">Usage</a>
              <a class="item" href="/theming">Theming</a>
              <a class="item" href="/layouts">Layouts</a>
              <a class="item" href="/prototypes">Prototypes</a>
            </div>
          </div>
        </div>
      </div>
      */}
      <Switch>
        <Route component={Root} />
      </Switch>
    </div>
  );
}

MainPage.propTypes = {
};

export default MainPage;
