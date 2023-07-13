import React, { useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';
import LoginModal from './auth/LoginModal';
import RegisterModal from './auth/RegisterModal';
import  {logout} from "../redux/actions"
import {useNavigate} from "react-router-dom"

const AppNavbar = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const user=useSelector((state)=>state.user)
  const navigate=useNavigate()
const logoutt=()=>{
  dispatch(logout())
  navigate("/")

}
  const authLinks = (
    <Fragment>
      <NavItem>
        <Link to="/dashboard">
          <span className="navbar-text mr-3">
            <strong>
              {user?user.name:null}
            </strong>
          </span>
        </Link>
      </NavItem>
      <NavLink href="#" onClick={logoutt}>
        Logout
      </NavLink>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <NavItem>
     <LoginModal />
      </NavItem>
      <NavItem>
   <RegisterModal />
      </NavItem>
    </Fragment>
  );

  return (
    <div>
      <Navbar color="dark" dark expand="sm" className="mb-5">
        <Container>
          <NavbarBrand href="/">Home</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {user?authLinks:guestLinks}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default AppNavbar;