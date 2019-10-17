import React, { Component } from 'react';
import { Navbar, NavItem, Dropdown, Divider, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import M from 'materialize-css';
import { connect } from 'react-redux';

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

    renderContent(){
        switch(this.props.auth){
            case null:
                return;
            case false:
                return;
            default:
                return [
                <Navbar key={this.props} brand={<Link to={this.props.auth ? '/' : '/login'}>PharmaGO</Link>} alignLinks="right">
                    <NavItem href="/drugs">
                        Remédios
                    </NavItem>
                    <NavItem  href="/carrinho">
                        Carrinho
                    </NavItem>
                    <Dropdown trigger={<a><Icon>view_module</Icon></a>}>    
                        <Link to="/" style={{fontSize: '12px'}}>Sua Conta</Link>
                        <Link to="/" style={{fontSize: '12px'}}>Configurações</Link>
                        <Link to="/suporte" style={{fontSize: '12px'}}>Suporte</Link>
                        <Divider />
                        <Link  to="/api/logout" style={{fontSize: '12px'}}>Sair</Link>
                    </Dropdown>
                </Navbar>
                ];
        }
    }

    render() {
        return (
            <nav>
                <ul>
                {this.renderContent()}
                </ul>
            </nav>
        );
    }
}

function mapStateTopProps({auth}) {
    return { auth }
}

export default connect(mapStateTopProps)(Header);