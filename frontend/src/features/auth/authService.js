//@author: Firat
//This is where we will be handling the posts requests from the browser (client side) and save & update global states via redux
//Instead of postman that we used before, now we will be able to use axios instead
import axios from "axios";

//Our front-end application runs on port 3000, but our back-end application runs on port 5000
//Since we are in the front-end folder, our application puts 3000 automatically after localhost which will cause a trouble for sending post requests to the correct url
//so we setted the proxy to be 5000 in the package.json file in this front end folder to convert it back to 5000
const API_URL = "/api/users/";

//Registering user
//since we are making a post request to the database, we need to make it an async function
//userData input comes from the authSlice.js and before that it is comming from the register.jsx component
const register = async (userData) => {
  //below response is a json object sent as a response from the userController file in backend folder which eventually saves it to the database.
  //it contains user information: _id, name, email, and token.
  const response = await axios.post(API_URL, userData);

  //now we take that user and add to our redux storage
  if (response.data) {
    //You can only put strings in local storage, not json
    //so we save it as string in the global state user
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

//Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);
  console.log('the response is: '+response+' \n the response data is: '+response.data);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data)); // you can only put strings in local strorage
  }

  return response.data;
};

//logout user
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
