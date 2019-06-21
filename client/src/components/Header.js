import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <ul id="dropdown1" class="dropdown-content">
                    <li><a href="#!">Sua Conta</a></li>
                    <li><a href="#!">Configurações</a></li>
                    <li class="divider"></li>
                    <li><a href="#!">Sair</a></li>
                </ul>
            <nav>
                <div>
                    <a href="/" class="brand-logo">PharmaGO</a>  
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="/drugs">Drugs</a></li>
                        <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">+</a></li>
                    </ul>
                </div>
            </nav>
            </div>
        );
    }
}

export default Header;