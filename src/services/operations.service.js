import axios from "axios";
import * as Constants from "../util/Constants";

const API_URL = Constants.URLBASE_V1 + "operations/";

/**
 * @author wmonge - 03/2023
 * @returns 
 */
const getBalanceByUser = (userId, token) => {
  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
        'Authorization': `Bearer ${token}`
    }
  };
  return axios
    .get(API_URL + "getBalanceByUser?userId=" + userId, axiosConfig)
    .then((response) => {
      console.log('RESPONSE BALANCE----');
      console.log(response);
      return response;
    });
};

const mathOperations = (number1, number2, stringSize, operationId, type, userId, token) => {
  const params = JSON.stringify({ number1: number1, number2: number2, stringSize: stringSize,
    operationId: operationId, type: type, userId: userId });
  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
        'Authorization': `Bearer ${token}`
    }
  };
  return axios
    .post(API_URL + "mathOperations", params, axiosConfig)
    .then((response) => {
        console.log('RESPONSE MATH');
        console.log(response);
      return response;
    });
};

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
    .get(API_URL + "getRecordsByUser", params, axiosConfig)
    .then((response) => {
      console.log('RESPONSE BALANCE----');
      console.log(response);
      return response;
    });
};

const OperationsService = {
  mathOperations,
  getBalanceByUser,
  getRecords
}

export default OperationsService;
