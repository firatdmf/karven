import axios from "axios"; // instead of postman, now we will be able to use axios instead

const API_URL = "/api/users/"; // right now this looked at 3000 so we added proxy to the package.json file to convert it back to 5000

//Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data)); // you can only put strings in local strorage
  }

  return response.data;
};

//Login user
const login = async (userData) => {
    const response = await axios.post(API_URL+'login', userData);
  
    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data)); // you can only put strings in local strorage
    }
  
    return response.data;
  };


//logout user
const logout = ()=>{
    localStorage.removeItem('user');
}

const authService = {
  register,
  logout,
  login,
};

export default authService;
