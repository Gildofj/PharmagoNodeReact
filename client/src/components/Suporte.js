import React, { Component } from 'react';
import { Row, Col, TextInput, Textarea } from 'react-materialize';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Suporte extends Component {
    render() {
        return (
        <Row>
            <Col s={12}>
                <Row>
                    <div>
                        <TextInput email label="Email" s={12}/>
                    </div>
                    <div>
                        <Textarea text label="Mensagem" style={{height: "120px"}} s={12}/>
                    </div>
                    <br/>
                    <div style={{textAlign: "center"}}>
                        <a id="btnEnviarEmail" type="input" className="btn" style={{margin: "auto"}}>Enviar</a>
                    </div>
                </Row>
            </Col>
        </Row>
        );
    }
}

export default connect(null, actions)(Suporte);