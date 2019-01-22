import PropTypes from 'prop-types';
import React from 'react';
import Icon from './Icon';
import { mdiPlus, mdiEqual } from '@mdi/js';

function process(node, i) {
  switch(typeof node) {
    case 'string':
      switch (node.trim()) {
        case '+':
          return <Icon key={i} path={mdiPlus} />;
        case '=':
          return <Icon key={i} path={mdiEqual} />;
      }
      return {key: i, ...node};
    default:
      return {key: i, ...node};
  }
}

export default function Expression({children, ...props}) {
  return (
    <div className="expression" {...props}>
      {
        children.map(process)
      }
    </div>
  );
}

Expression.propTypes = {
  children: PropTypes.array
};
