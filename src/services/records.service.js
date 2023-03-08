import axios from "axios";

const API_URL = "http://truenortharithmeticback-env.eba-i9aufhm8.us-east-1.elasticbeanstalk.com/truenorth/api/v1/records/";

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

const RecordsService = {
  getRecords
}

export default RecordsService;
