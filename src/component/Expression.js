import PropTypes from 'prop-types';
import React from 'react';
import Icon from './Icon';
import { mdiPlus, mdiEqual } from '@mdi/js';

import { asArray } from '../util/objects';

function process(node, i) {
  switch(typeof node) {
    case 'string':
      switch (node.trim()) {
        case '+':
          return <Icon key={i} path={mdiPlus} color="#667" />;
        case '=':
          return <Icon key={i} path={mdiEqual} color="#667" />;
      }
      return node;
    default:
      return {key: i, ...node};
  }
}

export default function Expression({children, ...props}) {
  return (
    <div className="expression" {...props}>
      {
        asArray(children).map(process)
      }
    </div>
  );
}

Expression.propTypes = {
  children: PropTypes.any
};
