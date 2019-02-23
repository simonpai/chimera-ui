import PropTypes from 'prop-types';
import React from 'react';
import Icon from './Icon';
import { mdiPlus, mdiEqual } from '@mdi/js';

import { asArray } from 'util/objects';
import { useToggle } from  'util/hooks';

const ICON_PATHS = {
  '+': mdiPlus,
  '=': mdiEqual
};

function reducer(acc, node, index) {
  const key = `n-${index}`;
  switch(typeof node) {
    case 'string':
      node = node.trim();
      var path = ICON_PATHS[node];
      if (path) {
        acc.push(<Icon key={key} path={path} color="#667" />);
      } else {
        acc.push(node);
      }
      break;
    default:
      switch (node.type) {
        case 'style':
          var [enabled, setToggle] = useToggle(!node.props.disabled);
          if (enabled) {
            acc.splice(1, 0, {...node, key: `${key}-0`});
          }
          acc.push(<span key={key} className={`code ${enabled ? 'enabled' : 'disabled'}`} onClick={setToggle}>{'{'}CSS{'}'}</span>);
          break;
        default:
          acc.push(node);
      }
  }
  return acc;
}

export default function Expression({children, vertical = false, className, ...props}) {
  const mergedClassName = 'expression ' + (vertical ? 'vertical' : 'horizontal') + (className ? ' ' + className : '');
  return (
    <div className={mergedClassName} {...props}>
      {
        asArray(children).reduce(reducer, [])
      }
    </div>
  );
}

Expression.propTypes = {
  vertical: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string
};
