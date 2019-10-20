import React, {Component} from 'react';
import { Row, Col, Button, Card } from 'react-materialize';
import { connect } from 'react-redux';
import { fetchDrug } from '../../actions';
import visaImage from '../../images/VISA.png'

class Drug extends Component {
    componentDidMount() {
        this.props.fetchDrug();
    }


    saveCart(drug) {
        localStorage.setItem('cart', JSON.stringify(drug));
    }

    renderDrug(){
        return this.props.drugs.map(drug => {
            return(
            <Row key={drug._id}>
                <Col s={12}>
                        <Row>
                            <Card horizontal
                            header={<img src={drug.imagem} width="300" alt={drug.tituloDrug} />}
                            >
                                <div className="card-title" style={{marginTop:'-50px'}}>
                                    <h3><strong>{drug.tituloDrug}</strong></h3>
                                </div>
                                <div >
                                    <p>{drug.descricao} </p>
                                </div>
                                
                            </Card>
                            <Card>
                                <div>
                                <img src={visaImage} width="60" alt="Visa" /> 
                                </div>
                                <div className="right">
                                    <Button onClick={this.saveCart(drug)}>Carrinho</Button>
                                </div>
                                <div className="right" style={{
                                        position: 'absolute',
                                        right: '20px',
                                        bottom: '10px'
                                    }}>
                                    <h4><strong>R${drug.preco}</strong></h4>
                                </div>
                            </Card>
                        </Row>
                    </Col>
                </Row>
            );
        });
    }

    render() {
        return (
            <div>
                {this.renderDrug()}
            </div>
        );
    }
}

function mapStateToProps({ drugs }) {
    return { drugs }
}

export default connect(mapStateToProps, { fetchDrug })(Drug);