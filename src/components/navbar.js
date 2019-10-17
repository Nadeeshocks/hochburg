import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Button, CardBody, Card } from 'reactstrap';
import Toggler from './toggler';
import HochburgMenu from './hochburgMenu';

export default (props) => {
  const [collapse, setCollapse] = useState(false);
  const toggle = () => setCollapse(!collapse);

  return (
    <Navbar color="faded" light className="mt-5 my-3">
      <NavbarBrand href="/" className="text-white">Hochburg</NavbarBrand>  
      <span class="text-light mr-auto ml-5">branding and<br/>communication</span> 
      <Toggler onClick={toggle} toggle={collapse}/>
      <Collapse isOpen={collapse}>
        <HochburgMenu />
      </Collapse>
    </Navbar>
  );
}

