import React, { Component } from 'react';
import { Row, Col, TextInput } from 'react-materialize';
import * as actions from '../actions';
import { connect } from 'react-redux';

class Login extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {

        return (
        <Row>
            <Col s={12}>
                <Row>
                    <div>
                        <TextInput email validate label="Email" error="E-mail Incorreto" sucess="Great" s={12}/>
                    </div>      
                    <div>                   
                        <TextInput password validate label="Password" error="Senha Incorreta" sucess="Great" s={12}/>
                    </div>
                    <br/>
                    <div>
                        <a id="btnGoogleCadatro" type="input" className="btn" href="/auth/google">Login</a>
                        <br/>
                        <br/>
                        <a id="btnGoogleCadatro" type="input" className="btn" href="/auth/google">Login com Google</a>
                    </div>
                </Row>
            </Col>
        </Row>
        );
    }
    }

export default connect(null, actions)(Login);