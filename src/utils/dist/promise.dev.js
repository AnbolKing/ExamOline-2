"use strict";

function anbol(arr) {
  return arr.reduce(function (prev, next) {
    return prev.concat(Array.isArray(next) ? anbol(next) : next);
  }, []);
}

var array = [1, [2, [3, 4]]];
console.log(anbol(array));