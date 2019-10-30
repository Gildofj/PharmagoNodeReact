import React, { Component } from 'react';
import Payments from '../Payments';
import { Row, Card, Col, Icon } from 'react-materialize';
import carrinhoCss from './Carrinho.css'; 

class Carrinho extends Component {
    // removeCart = (_id) => {
    //     let carrinhoRemove = localStorage.getItem('cart')
    //     let arrayCarrinho = JSON.parse(carrinhoRemove)
    //     console.log(arrayCarrinho)
    //     arrayCarrinho.map(produto => {
    //         var index = arrayCarrinho.indexOf(produto);
    //         if (index !== -1) arrayCarrinho.splice(index, 1);
    //         localStorage.setItem('cart', arrayCarrinho)
    //     })
    // }

    enterDrug(urlDrug){
        this.history.push(urlDrug)
    }
    
    renderItems(){
        const carrinho =  JSON.parse(localStorage.getItem('cart'));
        if(carrinho !== null){
            return carrinho.map(produto => {
                const urlDrug =`/drug/${produto._id}`
                return (
                    <div onClick={() => this.enterDrug.bind(this, urlDrug)} key={produto._id}>
                        <Card horizontal
                            textClassName="pink-text"
                            style={{
                                height: '125px'
                            }}
                            >
                            <span className="card-title"><strong>{produto.tituloDrug}</strong></span>
                            <h5 className="right"><strong>R${produto.preco}</strong></h5>
                            {/* <a onClick={this.removeCart.bind(this, produto._id)} style={{
                                position: 'absolute',
                                right: '0px',
                                top: '0px'
                            }}><Icon textClassName="black">clear</Icon></a> */}
                        </Card>
                    </div>
                );
            });
        } else {
            return <div></div>;
        }
    };


    render(){
        if(JSON.parse(localStorage.getItem('cart')) === null){
            return(
            <Row>
                <Col s={12}>
                    <Row>
                        <Card style={{
                                position: 'relative',
                                minHeight: '400px'
                            }}>
                            <div style={{textAlign: 'center'}}>
                                <h4>
                                    <strong>De uma olhada em nossos remédios para deixar seu carrinho mais alegre! :D</strong>
                                </h4>
                            </div>
                        </Card>
                    </Row>
                </Col>
            </Row>  
            );
        } else {
        return(
            <Row>
                <Col s={12}>
                    <Row>
                        <Card style={{
                                position: 'relative',
                                minHeight: '400px'
                            }}>
                            <div style={{marginBottom: '45px'}}>
                                {this.renderItems()}
                                <div className="right" style={{
                                    position: 'absolute',
                                    right: '20px'
                                }}>
                                <Payments/>  
                                </div>
                            </div>
 
                        </Card>
                    </Row>
                </Col>
            </Row>            
        );
        }
    };
}

export default Carrinho;