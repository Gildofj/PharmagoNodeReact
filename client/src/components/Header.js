import React, { Component } from 'react';
import { Navbar, NavItem, Dropdown, Divider, Icon } from 'react-materialize';
import M from 'materialize-css';

class Header extends Component {
    componentDidMount() {

        let dropdowns = document.querySelectorAll('.dropdown-trigger');

        let options = {
            inDuration: 300,
            outDuration: 300,
            hover: false, // Activate on hover
            coverTrigger: false, // Displays dropdown below the button
        };

        M.Dropdown.init(dropdowns, options);
    }
    render() {
        return (
            <Navbar brand={<a href=" ">PharmaGO</a>} alignLinks="right">
                <NavItem href="/drugs">
                    Remédios
                </NavItem>
                <NavItem href="/drugs/carrinho">
                    Carrinho
                </NavItem>
                <Dropdown trigger={<a><Icon>view_module</Icon></a>}>
                    <a href=" " style={{fontSize: '12px'}}>Sua Conta</a>
                    <a href=" " style={{fontSize: '12px'}}>Configurações</a>
                    <Divider />
                    <a href="/api/logout" style={{fontSize: '12px'}}>Sair</a>
                </Dropdown>
            </Navbar>
        );
    }
}

export default Header;