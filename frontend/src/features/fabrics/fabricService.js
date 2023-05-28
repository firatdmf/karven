import axios from "axios";

const API_URL = "/api/fabrics/";

//Create new fabric
const createFabric = async (fabricData, token) => {
  //now config will be an object
  const config = {
    headers: {
      //Authorization will be our token
      Authorization: `Bearer ${token}`, // we want to convert token to bearer
    },
  }
  //now we'll send our request
  const response = await axios.post(API_URL, fabricData, config); // a post request to the api_url, we want to send our fabricdata and pass our config bc it includes headers with authorization ie the token. If we don't do that we won't be able to access that route
  return response.data;
}

//Get user fabrics
const getFabrics = async (token) => {
  //now config will be an object
  // const config = {
  //   headers: {
  //     //Authorization will be our token
  //     Authorization: `Bearer ${token}`, // we want to convert token to bearer
  //   },
  // }
  //now we'll send our request
  const response = await axios.get(API_URL); // a post request to the api_url, we want to send our fabricdata and pass our config bc it includes headers with authorization ie the token. If we don't do that we won't be able to access that route
  // console.log(response.data);
  return response.data;
}

const getFabric = async (fabricId, token) => {
  //now config will be an object
  // const config = {
  //   headers: {
  //     //Authorization will be our token
  //     Authorization: `Bearer ${token}`, // we want to convert token to bearer
  //   },
  // }
  //now we'll send our request
  const response = await axios.get(API_URL+fabricId); // a post request to the api_url, we want to send our fabricdata and pass our config bc it includes headers with authorization ie the token. If we don't do that we won't be able to access that route

  return response.data;
}






//delete user fabric
const deleteFabric = async (fabricId, token) => {
  //now config will be an object
  const config = {
    headers: {
      //Authorization will be our token
      Authorization: `Bearer ${token}`, // we want to convert token to bearer
    },
  }
  //now we'll send our request
  const response = await axios.delete(API_URL + fabricId, config); // a post request to the api_url, we want to send our fabricdata and pass our config bc it includes headers with authorization ie the token. If we don't do that we won't be able to access that route

  return response.data;
}

const fabricService = {
  createFabric,
  getFabrics,
  getFabric,
  deleteFabric,
}

export default fabricService
