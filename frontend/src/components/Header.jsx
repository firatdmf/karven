import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa"; //fa stands for font awesome (there are many others)
import logo from "../assets/karvenLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"; // to see if the user is logged in or not
import { logout, reset } from "../features/auth/authSlice";
import classes from "./Header.module.css";

function Header() {
  const capitilize = function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };
  //initializing below
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth); // define the function with the which part of the state we want it from, which in this case it is auth

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/"); //to got dashboard
  };

  return (
    <header className={classes.header}>
      <div className={classes.topBar2}>
        <span className={classes.span2}>
          {user ? (
            <div className={classes.span2flex}>

              <p>Welcome back, {user && capitilize(user.name)}!</p>
              <div className={classes.logoutButton} onClick={onLogout}>
                <FaSignOutAlt />
                <p>Logout</p>
              </div>
            </div>
          ) : (
            <div className={classes.span2flex2}>
              <span>
                <Link to="/login" className={classes.loginButton}>
                  <FaSignInAlt />
                  <p>Login</p>
                </Link>
              </span>
              <span>|</span>
              <span>
                <Link to="/register" className={classes.registerButton}>
                  <FaUser />
                  <p>Register</p>
                </Link>
              </span>
            </div>
          )}
        </span>
      </div>

      {/* <div className={classes.topBar}>
        <div className={classes.floatLeft}>
        </div>
        <p>
          Call a licensed expert
          <span className={classes.bold}>1-323-794-6484</span> |
          <span className={classes.bold}>Become a partner</span>
        </p>
      </div> */}
      <Link to="/">
        <img src={logo} alt="logo" className={classes.logo} />
      </Link>
      <div className={classes.navbar}>
        <Link className={classes.a} to="/">
          Home
        </Link>
        <Link className={classes.a} to="/fabrics">
          Fabrics
        </Link>
        {/* <Link className={classes.a} to="/fabricUpload">
          Upload Fabrics
        </Link> */}
        <Link className={classes.a} to="/about">
          About Us
        </Link>
        <Link className={classes.a} to="/contact">
          Contact
        </Link>
      </div>
      {/* <div className={classes.shuffle2}></div> */}
    </header>
  );
}

export default Header;
