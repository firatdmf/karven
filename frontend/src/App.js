//Bringing the router to assign a url route to each component from React
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Toast container helps us display errors in a fancy way with style
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//bringing the components as pages and assigning them to an url path route
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import FabricUpload from "./pages/FabricUpload";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import About from "./pages/About"
import Trial from "./Trial";
import Fabrics from "./pages/Fabrics";
import FabricDisplay from "./pages/FabricDisplay";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          {/* You cannot have anything within the Routes tag except the Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element= {<Login />} />
            <Route path="/register" element={<Register />} />
            {/* <Route path="/fabricUpload" element={<FabricUpload />} /> */}
            <Route path="/fabrics" element={<Fabrics />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/fabricDisplay" element={<FabricDisplay/>}/>
            <Route path="/trial" element={<Trial />} />
          </Routes>
          <Footer />
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
