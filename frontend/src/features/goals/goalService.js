//axios is the library helps you write more readable asynchronous code create http requests that are present externally
import axios from "axios";

//in here you decide where the data collection is (this is important)
const API_URL = "/api/goals/";

//Create new goal
const createGoal = async (goalData, token) => {
  //now config will be an object
  const config = {
    headers: {
      //Authorization will be our token
      Authorization: `Bearer ${token}`, // we want to convert token to bearer
    },
  }
  //now we'll send our request
  const response = await axios.post(API_URL, goalData, config); // a post request to the api_url, we want to send our goaldata and pass our config bc it includes headers with authorization ie the token. If we don't do that we won't be able to access that route
  return response.data;
}

//Get user goals
const getGoals = async (token) => {
  //now config will be an object
  const config = {
    headers: {
      //Authorization will be our token
      Authorization: `Bearer ${token}`, // we want to convert token to bearer
    },
  }
  //now we'll send our request
  const response = await axios.get(API_URL, config); // a post request to the api_url, we want to send our goaldata and pass our config bc it includes headers with authorization ie the token. If we don't do that we won't be able to access that route

  return response.data;
}

//delete user goal
const deleteGoal = async (goalId, token) => {
  //now config will be an object
  const config = {
    headers: {
      //Authorization will be our token
      Authorization: `Bearer ${token}`, // we want to convert token to bearer
    },
  }
  //now we'll send our request
  const response = await axios.delete(API_URL + goalId, config); // a post request to the api_url, we want to send our goaldata and pass our config bc it includes headers with authorization ie the token. If we don't do that we won't be able to access that route

  return response.data;
}

const goalService = {
  createGoal,
  getGoals,
  deleteGoal,
}

export default goalService
