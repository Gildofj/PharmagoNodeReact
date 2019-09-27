import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Landing extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render(){
        return(
            <div style={{textAlign: "center"}}>
                <h1>
                    PharmaGO!
                </h1>
                Não há remédios disponiveis :(
            </div>
        );
    }
}

export default connect(null, actions)(Landing);