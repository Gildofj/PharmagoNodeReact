import React, { Component } from 'react';
import { fetchDrugs } from '../../actions';
import { connect } from 'react-redux';
import { Card } from 'react-materialize';

class DrugsList extends Component {
    componentDidMount() {
        this.props.fetchDrugs();
    }

    renderDrugs() {
        return this.props.drugs.map(drug => {
            const urlDrug =`/drug/${drug._id}`
            return (
                    <Card 
                        key={drug._id}
                        textClassName="pink-text"
                        actions={[<a href={urlDrug} key={0}>Detalhes</a>]}
                        >
                        <span className="card-title"><strong>{drug.tituloDrug}</strong></span>
                        {drug.descricao}
                        <h5 className="right"><strong>R${drug.preco}</strong></h5>
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