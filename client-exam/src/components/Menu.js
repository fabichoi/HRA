import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse } from 'reactstrap';
import '../style/Menu.css';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div className="menu">
                <Navbar color="light" light expand="md">
                <NavbarBrand href="/">한자 학습 시스템</NavbarBrand>                        
                <NavbarToggler onClick={this.toggle}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem><NavLink href="/search">한자 검색</NavLink></NavItem>
                        <NavItem><NavLink href="/learn">한자 학습</NavLink></NavItem>                      
                        <NavItem><NavLink href="/words">단어 학습</NavLink></NavItem>
                    </Nav>              
                </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Menu;