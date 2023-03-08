import axios from "axios";
import * as Constants from "../util/Constants";

const API_URL = Constants.URLBASE_V1 + "records/";

/**
 * @author wmonge - 03/2023
 * @returns 
 */
const getRecords = (page, size, filters, userId, token) => {
  const params = JSON.stringify({ page: page, size: size, filters: filters, userId: userId });
  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
        'Authorization': `Bearer ${token}`
    }
  };
  return axios
    .post(API_URL + "getRecordsByUser", params, axiosConfig)
    .then((response) => {
      console.log('RESPONSE RECORDS----');
      console.log(response);
      return response;
    });
};

const deleteRecord = (recordId, token) => {
  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
        'Authorization': `Bearer ${token}`
    }
  };
  return axios
    .delete(API_URL + "deleteRecordById?id=" + recordId, axiosConfig)
    .then((response) => {
      return response;
    });
};

const RecordsService = {
  getRecords,
  deleteRecord
}

export default RecordsService;
