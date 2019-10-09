import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SuporteField from './SuporteField';
import validateEmails from '../../util/validateEmails';
import { Row, Col } from 'react-materialize';
import formFields from './formFields' 

class SuporteForm extends Component {
    renderField(){
        return _.map(formFields, ({label, name}) => {
            return (
                <Field key={name} component={SuporteField} type="text" label={label} name={name}/>
            );
        });
    }

    render(){
        return(
            <Row>
            <Col s={12}>
                <Row>
                    <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                        {this.renderField()}
                        {/* <div>
                            <TextInput label="Email" s={12} render={this.renderField()}/>
                        </div>
                        <div>
                            <Textarea text label="Mensagem" style={{height: "120px"}} s={12}/>
                        </div> */}
                        <br/>
                        <div style={{textAlign: "center"}}>
                            <button type="submit" className="btn" style={{margin: "auto"}}>Enviar</button>
                        </div>
                    </form>
                </Row>
            </Col>
        </Row>
        );
    }
}

function validate(values) {
    const errors = {};

    errors.emails = validateEmails(values.emails || ' ');

    _.each(formFields, ({ name, noValueError }) => {
        if(!values[name]){
            errors[name] = noValueError;
        }
    });

    return errors
}

export default reduxForm({
    validate,
    form: 'suporteForm'
})(SuporteForm);