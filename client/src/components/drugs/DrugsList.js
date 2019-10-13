import React, { Component } from 'react';
import { fetchDrugs } from '../../actions';
import { connect } from 'react-redux';
import { Card } from 'react-materialize';

class DrugsList extends Component {
    componentDidMount() {
        this.props.fetchDrugs();
    }

    renderDrugs() {
        console.log(this.props.drugs)
        return this.props.drugs.map(drug => {
            return (
                    <Card
                        className="blue-grey darken-1"
                        textClassName="white-text"
                        title={drug.tituloDrug}
                        key={drug._id}  
                        >
                        {drug.descricao}
                        <p className="right">R${drug.preco}</p>
                    </Card>
            );
        });
    }

    render() {
            return(
              <div>
                {this.renderDrugs()}
              </div>
            )
      }
}


function mapStateToProps({ drugs }) {
    return { drugs };
}

export default connect(mapStateToProps, { fetchDrugs })(DrugsList);