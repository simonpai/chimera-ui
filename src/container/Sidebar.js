import PropTypes from 'prop-types';
import React from 'react';
import { Link } from "react-router-dom";
import Icon from 'component/Icon';
import { mdiFolderOpen, mdiDuck } from '@mdi/js';

import { pascal2param, param2title, pascal2title } from '../util/strings';

const invContext = require.context('../inventory', true, /^(?!\.\/_).*(?<!\.js)$/);
const roots = buildTree(invContext.keys().map(s => s.substring(2)));

function buildTree(paths) {
  paths.sort();

  const roots = [];
  const nodes = [];
  let len = 0;

  for (let path of paths) {
    const segs = path.split('/');
    const seglen = segs.length;

    for (let i = 0, seg, forked, n; i < seglen && (seg = segs[i]); i++) {
      if (!forked && i < len && seg === nodes[i].name) {
        continue;
      }
      forked = true;
      (i ? (n.children || (n.children = [])) : roots).push((n = nodes[i] = {name: seg}));
    }
    len = seglen;
  }
  return roots;
}

function List({context, current, children}) {
  return (
    <div role="list" className="ui list">
      {
        children.map(c => (
          <div role="listitem" key={c.name} className="item">
            <Item
              context={context}
              current={current && (c.name === current[0]) && current.slice(1)}
              active={!!current && current.length === 1 && pascal2param(c.name) === current[0]}
              {...c} />
          </div>
        ))
      }
    </div>
  );
}

List.propTypes = {
  context: PropTypes.string,
  current: PropTypes.any,
  children: PropTypes.array.isRequired
};

function Item({context = '', current, active, name, children}) {
  return children ? (
    <React.Fragment>
      <div className="dir">
        <Icon path={mdiFolderOpen} color="#999" />
        <span>{param2title(name)}</span>
      </div>
      <List context={context + '/' + name} current={current}>
        {
          children
        }
      </List>
    </React.Fragment>
  ) : (
    <Link to={context + '/' + pascal2param(name)} className={active ? 'active' : ''}>
      <Icon path={mdiDuck} color={active ? '#F0F0F0' : '#999'} />
      <span>{pascal2title(name)}</span>
    </Link>
  );
}

Item.propTypes = {
  context: PropTypes.string,
  current: PropTypes.any,
  active: PropTypes.bool,
  name: PropTypes.string.isRequired,
  children: PropTypes.array
};

function Sidebar({pathname}) {
  return (
    <div id="sidebar">
      <List current={pathname.substring(1).split('/')}>
        {
          roots
        }
      </List>
    </div>
  );
}

Sidebar.propTypes = {
  pathname: PropTypes.string.isRequired
};

export default Sidebar;
