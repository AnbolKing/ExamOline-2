"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.user = void 0;

var isLogin = function isLogin() {
  Boolean(localStorage.getItem("token"));
};

var getToken = function getToken() {
  return localStorage.getItem("token");
};

var user = function user() {
  return {
    isLogin: isLogin,
    getToken: getToken
  };
};

exports.user = user;