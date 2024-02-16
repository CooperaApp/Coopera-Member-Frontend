import { BASE_URL } from "./BaseUrl";
import axios from "axios";


export const AddMemberSavings = (payload) => {
    const endpoint = "/savings/save";
    const URL = `${BASE_URL}${endpoint}`;
  
    const headers = {
      Authorization: `Bearer ${payload.token}`,
    };
  
    const requestBody = {
        amountToSave: payload.amountToSave,
    };
  
    return axios
      .post(URL, requestBody, { headers })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw error;
      });
  };


  export const EditMemberSaving = (payload) => {
    const endpoint = "/savings/edit";
    const URL = `${BASE_URL}${endpoint}`;
  
    const headers = {
      Authorization: `Bearer ${payload.token}`,
    };
  
    const requestBody = {
        amountToSave: payload.amountToSave,
    };
  
    return axios
      .post(URL, requestBody, { headers })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw error;
      });
  };
  
  