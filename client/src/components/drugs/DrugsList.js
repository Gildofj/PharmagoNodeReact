import React, { Component } from "react";
import { fetchDrugs } from "../../actions";
import { connect } from "react-redux";
import { Card } from "react-materialize";

class DrugsList extends Component {
  componentDidMount() {
    this.props.fetchDrugs();
  }

  renderDrugs() {
    return this.props.drugs.map((drug) => {
      const urlDrug = `/drug/${drug._id}`;
      return (
        <a href={urlDrug} key={drug._id}>
          <Card horizontal textClassName="pink-text">
            <span className="card-title">
              <strong>{drug.tituloDrug}</strong>
            </span>
            <h5 className="right">
              <strong>R${drug.preco}</strong>
            </h5>
          </Card>
        </a>
      );
    });
  }

  render() {
    return <div>{this.renderDrugs()}</div>;
  }
}

function mapStateToProps({ drugs }) {
  return { drugs };
}

export default connect(mapStateToProps, { fetchDrugs })(DrugsList);
