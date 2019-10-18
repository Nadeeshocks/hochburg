
import React from 'react';
import AnimatedMenu from '../css/animatedMenu.css';

export default ()=> {
  return (
    <div className="menu">
      <div className="menu-items">
        <h3 className="menu-item-title">projects</h3>
        <p className="menu-item-no">01</p>
      </div>
      <div className="menu-items">
        <h3 className="menu-item-title">jobs</h3>
        <p className="menu-item-no">02</p>
      </div>
      <div className="menu-items">
        <h3 className="menu-item-title">about</h3>
        <p className="menu-item-no">03</p>
      </div>
      <div className="menu-items">
        <h3 className="menu-item-title">gallery</h3>
        <p className="menu-item-no">04</p>
      </div>
    </div>
  )
}
