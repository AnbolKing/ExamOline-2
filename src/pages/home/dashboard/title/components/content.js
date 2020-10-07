import React from 'react';

const Content = (props) => {
  const { children } = props;
  return (
    <div className="content-container">
      {children}
    </div>
  )
};

export default Content;