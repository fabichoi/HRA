import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse } from 'reactstrap';
import { BrdBtn } from 'components/Base/Button';

class LoginMenu extends Component {
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
                <Navbar light expand="md">
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <BrdBtn to='/search'>한자 검색</BrdBtn>
                            <BrdBtn to='/learn'>한자 학습</BrdBtn>
                            <BrdBtn to='/words'>단어 학습</BrdBtn>
                            <BrdBtn to='/auth/logout'>로그아웃</BrdBtn>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default LoginMenu;