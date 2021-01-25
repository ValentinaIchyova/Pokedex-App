import React, {Component} from 'react';
import styled from 'styled-components'; 



export default class NavBar extends Component {

    render() {
        return(
            <div>
                <nav className='navbar navbar-expand-md navbar-dark bg-dark fixed-top'
                     
                >
                    <a href='' className='navbar-brand col-sm-3 col-md-2 mr-0 align-items-center'>Pokedex</a>
                </nav>
            </div>
        )
    }
}

// import React, { useState } from 'react';
// import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

// const Example = (props) => {
//   const [collapsed, setCollapsed] = useState(true);
//   const toggleNavbar = () => setCollapsed(!collapsed);
//   console.log(props);
  

//   return (
//     <div>
//       <Navbar color="faded" light>
//         <NavbarBrand href="/" className="mr-auto">Pokedex</NavbarBrand>
//         <NavbarToggler onClick={toggleNavbar} className="mr-2" />
//         <Collapse isOpen={!collapsed} navbar>
//           <Nav navbar>
//             <NavItem>
//                 {props.pokemon.map(pokemon => {
//                     <NavLink href="/components/">{pokemon}</NavLink>
//                 })}              
//             </NavItem>
//           </Nav>
//         </Collapse>
//       </Navbar>
//     </div>
//   );
// }

// export default Example;
