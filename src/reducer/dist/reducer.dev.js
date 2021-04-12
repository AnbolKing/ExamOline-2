"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var defaultState = {
  inputValue: '',
  list: []
};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === 'change_value') {
    var newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }

  if (action.type === 'add_item') {
    var _newState = JSON.parse(JSON.stringify(state));

    _newState.list.push(_newState.inputValue);

    _newState.inputValue = '';
    return _newState;
  }

  if (action.type === 'delete_item') {
    var _newState2 = JSON.parse(JSON.stringify(state));

    _newState2.list.splice(action.index, 1);

    return _newState2;
  }

  return state;
};

exports["default"] = _default;