const console = window.console;
const listeners = {};

const TYPES = ['warn', 'error'];

TYPES.forEach(key => {
  const _fn = console['_' + key] = console[key];
  console[key] = function() {
    for (let listener of (listeners[key] || [])) {
      try {
        listener(...arguments);
      } catch(err) {
        console._error(err);
      }
    }
    _fn.apply(this, arguments);
  };
});

function _on(type, listener) {
  const fn = (...args) => {
    try {
      listener(...args);
    } catch(err) {
      console._error(err);
    }
  };
  (listeners[type] || (listeners[type] = [])).push(fn);
  return () => _off(type, fn);
}

function _off(type, fn) {
  const arr = listeners[type];
  if (!arr) {
    return;
  }
  const i = arr.indexOf(fn);
  if (i > -1) {
    arr.splice(i, 1);
  }
}

export const on = TYPES.reduce((acc, type) => {
  acc[type] = listener => _on(type, listener);
  return acc;
}, {});
