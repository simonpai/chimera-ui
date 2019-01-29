import PropTypes from 'prop-types';
import React from 'react';
import Icon from './Icon';
import { mdiPlus, mdiEqual } from '@mdi/js';

import { asArray } from '../util/objects';

function process(node, i) {
  const e = addKey(_process(node), i);
  return e;
}

function _process(node) {
  switch(typeof node) {
    case 'string':
      switch (node.trim()) {
        case '+':
          return <Icon path={mdiPlus} color="#667" />;
        case '=':
          return <Icon path={mdiEqual} color="#667" />;
      }
      return node;
    default:
      switch (node.type) {
        case 'style':
          return (
            <React.Fragment>
              {
                node
              }
              <span className="code">{'{'}CSS{'}'}</span>
            </React.Fragment>
          );
        default:
          return node;
      }
  }
}

function addKey(node, i) {
  switch(typeof node) {
    case 'object':
      return {...node, key: i};
    default:
      return node;
  }
}

export default function Expression({children, vertical = false, className, ...props}) {
  const mergedClassName = 'expression ' + (vertical ? 'vertical' : 'horizontal') + (className ? ' ' + className : '');
  return (
    <div className={mergedClassName} {...props}>
      {
        asArray(children).map(process)
      }
    </div>
  );
}

Expression.propTypes = {
  vertical: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string
};
