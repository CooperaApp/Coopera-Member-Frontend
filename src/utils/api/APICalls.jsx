import { BASE_URL } from "./API_BASE_URL";
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

  
  export const GetDasboardStatisticsForMember = () => {
    const endpoint = "/member/getMemberDashboardStatistic";
    const URL = `${BASE_URL}${endpoint}`;
  
    const token = sessionStorage.getItem("token");

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    return axios
      .post(URL, { headers })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw error;
      });
  };