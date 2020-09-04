import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducer from "./authReducer";
import drugsReducer from "./drugsReducer";

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  drugs: drugsReducer,
});
