import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Login from './Login';
import Landing from './Landing';
// import List from './List'
const Drug = () => <h2>Drug</h2>
 
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
                        <Redirect to="/landing"/>
                    }
                    />
                    <Route path="/landing" component={Landing}/>
                    {/* <Route exact path="/drugs" component={List}/> */}
                    <Route path="/drugs/:id" component={Drug}/>  
                    <Route path="/login" component={Login}/> 
                </div>
            </BrowserRouter>
        </div>
    );
}
}

export default connect(null, actions)(App);