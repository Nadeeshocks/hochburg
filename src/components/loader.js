import React from 'react';
import '../css/loader.css';

export default () => {
  return (
    <div className="app-loader">
      <div className="text-container">
        <h1>
          <span></span>
        </h1>
      </div>
      <line />
      <div className="line-loader"></div>
    </div>
  )
}
