import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Auth from './Auth';

import Header from './Header';
import Login from './Login';
import Landing from './Landing';
import Drug from './drugs/Drug';
import Suporte from './suporte/Suporte';

 
class App extends Component{
    componentDidMount() {
        this.props.fetchUser();
    }

    render(){

    return (
        <div className="container">
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route exact path="/" render={()=>
                        <Redirect to="/drugs"/>
                    }
                    />
                    <Auth path="/drugs" component={Landing}/>
                    <Auth path="/drugs/:id" component={Drug}/>  
                    <Route path="/login" component={Login}/> 
                    <Auth path="/suporte" component={Suporte}/>
                </div>
            </BrowserRouter>
        </div>
    );
}
}

export default connect(null, actions)(App);