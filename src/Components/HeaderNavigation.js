import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import './style.css';


function HeaderNavigation(){
    var brand = <a href='index.html'>Project Name</a>;
return(
        
    
            <Navbar brand={brand} fixedTop inverse toggleNavKey={0}>
                <Nav right eventKey={0}>
                    <header className="navbar">This is Header</header>
                </Nav>
            </Navbar>
        );
    }
export default HeaderNavigation;