import axios from "axios";

const API_URL = "http://truenortharithmeticback-env.eba-i9aufhm8.us-east-1.elasticbeanstalk.com/truenorth/api/v1/auth/";

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  const params = JSON.stringify({ username: username, password: password });
  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
  };
  return axios
    .post(API_URL + "signin", params, axiosConfig)
    .then((response) => {
      console.log('-------response: ');
      console.log(response);
      if (response.data.username) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};


const logout = () => {
  localStorage.removeItem("user");
  return axios.post(API_URL + "signout").then((response) => {
    return response.data;
  });
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
}

export default AuthService;
