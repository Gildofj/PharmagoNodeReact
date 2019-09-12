import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Button from 'react-materialize/lib/Button';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
    render(){
        return(
            <StripeCheckout
            name="PharmaGO"
            description="Efetue seu pagamento aqui!"
            amount={500}
            token={token => this.props.handleToken(token)}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <Button>
                    Efetuar Pagamento!
                </Button>
            </StripeCheckout>
        );
    }
}

export default connect(null, actions)(Payments);