import React, { useState } from 'react';
import { Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';

function Header() {
     const [isOpen, setIsOpen] = useState(false);

     const toggle = () => setIsOpen(!isOpen);
     return (
          <Navbar expand='md' style={{ padding: '20px', background: '#8f00ff' }}>
               <NavbarBrand href='/moviecart' style={{ color: '#fff', fontWeight: 'bold' }}>
                    Movie Cart
               </NavbarBrand>
               <NavbarToggler onClick={toggle} />
          </Navbar>
     );
}

export default Header;
