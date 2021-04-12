import React from 'react';

export const ThemeContext = React.createContext(
  'light' // 默认值
);

const LogIn = () => {
  return (
    <button>log in</button>
  )
};

const LogOut = () => {
  return (
    <button>log out</button>
  )
}

export const TestData = {
  LogIn,
  LogOut,
}