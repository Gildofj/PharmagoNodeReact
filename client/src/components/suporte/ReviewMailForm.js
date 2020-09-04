import _ from "lodash";
import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions";
import formFields from "./formFields";

const ReviewMailForm = ({ onCancel, formValues, submitMail, history }) => {
  const reviewMail = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Confirme seus dados para abertura do chamado!</h5>
      {reviewMail}
      <button className="btn red" onClick={onCancel}>
        Voltar
      </button>
      <button
        className="btn right"
        onClick={() => submitMail(formValues, history)}
      >
        Enviar
      </button>
    </div>
  );
};

function mapStateProps(state) {
  return { formValues: state.form.suporteForm.values };
}

export default connect(mapStateProps, actions)(withRouter(ReviewMailForm));
