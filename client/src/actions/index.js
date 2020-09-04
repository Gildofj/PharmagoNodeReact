import axios from "axios";
import { FETCH_USER, FETCH_DRUGS } from "./types";

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async (dispatch) => {
  const res = await axios.post("/api/stripe", token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitMail = (values, history) => async (dispatch) => {
  const res = await axios.post("/api/suporte", values);

  history.push("/drugs");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchDrugs = () => async (dispatch) => {
  const res = await axios.get("/api/drugs");

  dispatch({ type: FETCH_DRUGS, payload: res.data });
};

export const fetchDrug = () => async (dispatch) => {
  const res = await axios.get("/api/drug/:id");

  dispatch({ type: FETCH_DRUGS, payload: res.data });
};
