import React, { Fragment } from 'react';
import '../css/toggler.css';

export default ({ onClick, toggle }) => {
  return (
    <Fragment>
      <div onClick={onClick} className={`menu-toggler ${toggle ? 'active' : ''}`}>
        <span></span>
        <span></span>
      </div>
    </Fragment>
  )

  {/* <img src="/svg/menu-icon.svg" alt="" onClick={props.onClick}/> */ }
}
