import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';
import Toggler from './toggler';
import HochburgMenu from './hochburgMenu';
import '../css/navbar.css';

export default (props) => {
  const [collapse, setCollapse] = useState(false);
  const toggle = () => setCollapse(!collapse);

  return (
    <Navbar color="faded" light className="mt-5 my-3">
      <div className="navbar-wrapper">
        <NavbarBrand href="/" className="text-white">Hochburg</NavbarBrand>  
        <span className="text-light mr-auto ml-5">branding and<br/>communication</span> 
        <Toggler onClick={toggle} toggle={collapse}/>
      </div>
      <Collapse isOpen={collapse} className="collapse-wrapper">
        <Card>
          <HochburgMenu />
        </Card>        
      </Collapse>
    </Navbar>
  );
}

