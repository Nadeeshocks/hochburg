import React from 'react';
import hochburgMenu from '../css/hochburgMenu.css';
import AnimatedMenu from './animatedMenu';

export default ()=>{
  return (
    <div className="nav-menu">
      <div className="left-menu">

      </div>
      <div className="right-menu">
        <AnimatedMenu />
      </div>      
    </div>
  )
}
