import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import logo from './img/logo.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import Avatar from '@material-ui/core/Avatar';
import './style.css'

const Navbars = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()


  const Logouts = () => {
    dispatch(logout());
    auth.signOut();
  }

  return (
    <div className='container'>
      <Navbar collapseOnSelect expand="lg" className='' sticky="top" data-aos="fade-up">

        <Navbar.Brand style={{ marginLeft: "30px" }} >
          <Nav.Link href="/">  <img src={logo} width='90px' alt='' /></Nav.Link>

        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ background: 'white', opacity: '0.7' }} />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="justify-content-end align-items-center" style={{ width: "100%" }}>
            {!user ?
              <>
                <Nav.Link href="/" className='link'>HOME</Nav.Link>
                <Nav.Link as={Link} to="/login" className='link'>LOGIN</Nav.Link>
                <Nav.Link as={Link} to="/signup" className='link'>SIGNUP</Nav.Link>
              </>
              :
              <>
                <Nav.Link className='link' onClick={Logouts} >LOGOUT</Nav.Link>
                <Nav.Link className='link' ><Avatar src={user.photoURL} alt={user.displayName} /><p style={{marginLeft:"8px"}}>{user.displayName}</p></Nav.Link>
              </>
            }
          </Nav>

        </Navbar.Collapse>
      </Navbar>

    </div>

  )
}

export default Navbars
