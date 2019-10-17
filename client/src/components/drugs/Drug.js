import React, {Component} from 'react';
import { Row, Col, MediaBox, Card } from 'react-materialize';
import { connect } from 'react-redux';
import { fetchDrug } from '../../actions';

class Drug extends Component {
    componentDidMount() {
        this.props.fetchDrug();
    }


    render(){
        console.log(this.props.drugs)
        const drug = this.props.drugs;
        return(
        <Row key={drug._id}>
            <Col s={12}>
                    <Row>
                        <Card>
                            <MediaBox>
                                <img src="https://materializecss.com/images/sample-1.jpg" width="200" alt={drug.tituloDrug} />
                            </MediaBox>
                            <div className='card-title'>
                                <p>{drug.tituloDrug}</p>
                            </div>
                            <div className="center">
                                <p>{drug.descricao}</p>
                            </div>
                        </Card>
                    </Row>
                </Col>
            </Row>
        );
    }
}

function mapStateToProps({ drugs }) {
    return { drugs }
}

export default connect(mapStateToProps, { fetchDrug })(Drug);