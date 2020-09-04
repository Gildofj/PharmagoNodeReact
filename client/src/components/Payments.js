import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import Button from "react-materialize/lib/Button";
import { connect } from "react-redux";
import * as actions from "../actions";

let carrinho = JSON.parse(localStorage.getItem("cart"));

let soma =
  carrinho &&
  carrinho.reduce((PreVal, produto) => {
    return parseFloat(PreVal) + parseFloat(produto.preco);
  }, 0);

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="PharmaGO"
        description="Efetue seu pagamento aqui!"
        amount={soma * 100.01}
        currency="BRL"
        token={(token) => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <Button>Efetuar Pagamento!</Button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
