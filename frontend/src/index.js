//@author: Firat
//This is the root of our front-end application
//since we use react as our front-end javascript library, we will need to import it.
import React from "react";
//now, to set this file as our root file, we need to bring a built-in function called root from the react-dom/client
import { createRoot } from "react-dom/client";
//We use React-redux to have access to some states globally (in all react components (files) )
import { Provider } from "react-redux";
//now we pass our redux states from store.js file as properties to the Provider Component
import { store } from "./app/store"; //whenever we create a redux resource or state resource (users or goals), it does something i cannot understand
//Now we bring in our app file that has all the routes in it below to be sandwitched by the Provider (This way it's parent is Provider which has all the redux states in it)
import App from "./App";
//we bring our index.css file for styling which just consists of 5 lines of code:
// *{
//   box-sizing: border-box;
//   padding: 0;
//   margin: 0;
//  }
//above styling makes sure every styling is resetted that is provided by default by a browser
import "./index.css";

//below gets the whole main html document (the html tag by it's id) and sets it equal to a variable called container
const container = document.getElementById("root");
//then we use the built-in function that we imported from React to indicate the react where the root is.
const root = createRoot(container);

//Now we render below html tags in the jsx form inside our parent HTML tag
root.render(
  // <React.StrictMode>
  //We put our reduxt parent component on top of our original app component to make the redux states globally accessible to all react components
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);
