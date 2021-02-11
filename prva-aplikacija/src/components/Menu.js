import React from 'react'
import { Nav } from 'react-bootstrap'

const Menu = () => {
  return <Nav activeKey="/home">
      <Nav.Item>
        <Nav.Link href='/'> Home </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/login'> Login </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/songs'> Songs </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/albums'> Albums </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/artists'> Artists </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/contact'> About us </Nav.Link>
      </Nav.Item>
    </Nav>
}

export default Menu