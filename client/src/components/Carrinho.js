import React, { Component } from 'react';
import Payments from './Payments';
import { Row, Card, Col, Icon } from 'react-materialize';

class Carrinho extends Component {
    // removeCart() {
    //     localStorage.removeItem('cart')
    // }

    render(){
        const carrinho =  JSON.parse(localStorage.getItem('cart'));
        const urlDrug =`/drug/${carrinho._id}`
        return(
            <Row>
                <Col s={12}>
                    <Row>
                        <Card style={{
                            position: 'relative',
                            minHeight: '300px'
                        }}>    
                            <a href={urlDrug} key={carrinho._id}>
                                <Card horizontal
                                    textClassName="pink-text"
                                    >
                                    <span className="card-title"><strong>{carrinho.tituloDrug}</strong></span>
                                    <h5 className="right"><strong>R${carrinho.preco}</strong></h5>
                                    {/* <a onClick={this.removeCart()} style={{
                                        position: 'absolute',
                                        right: '0px',
                                        top: '0px'
                                    }}><Icon textClassName="black">clear</Icon></a> */}
                                </Card>
                            </a>
                            <div className="right" style={{
                                    position: 'absolute',
                                    right: '20px',
                                    bottom: '10px'
                                }}>
                                <li><Payments/></li>
                            </div>
                        </Card>
                    </Row>
                </Col>
            </Row>            
        );
    }
}

export default Carrinho;