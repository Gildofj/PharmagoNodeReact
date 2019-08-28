import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Login from './Login';
// import List from './List'
const Drug = () => <h2>Drug</h2>
const Landing = () => <h2>Landing</h2>

function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
          {...rest}
          render={auth =>
            auth ? (
            <Redirect push to="/"/>
            ) : (
            <Redirect push to="/login"/>
            )
          }
        />
    );
  }

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
                    <PrivateRoute exact path="/" component={Landing}/>
                    {/* <Route exact path="/drugs" component={List}/> */}
                    <PrivateRoute path="/drugs/:id" component={Drug}/>
                    <Route path="/login" component={Login}/>    
                </div>
            </BrowserRouter>
        </div>
    );
}
}

export default connect(null, actions)(App);