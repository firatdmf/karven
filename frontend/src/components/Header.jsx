import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa"; //fa stands for font awesome (there are many others)
import logo from "../assets/karvenLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"; // to see if the user is logged in or not
import { logout, reset } from "../features/auth/authSlice";
import classes from "./Header.module.css";
import { AiFillInstagram, AiOutlineMail } from "react-icons/ai";

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
        <div className={classes.floatLeft}></div>
        <p>
          Language:
          <span className={classes.bold}>Turkish</span> |
          <span className={classes.bold}>English</span> |
          <span className={classes.bold}>Russian</span>
        </p>
      </div> */}
      <div className={classes.logoGrid}>
        <div className={`${classes.item1} ${classes.item}`}>
          <div>
            <p>
              VAKIFLAR OSB MAH D100 CAD NO 38 <br />
              ERGENE TEKIRDAG, 59930 <br />
              TURKIYE
            </p>
            <p>+90 (533) 544-2525</p>
          </div>
        </div>
        <div className={`${classes.item2} ${classes.item}`}>
          <div className={classes.img}>
            <Link to="/">
              <img src={logo} alt="logo" className={classes.logo} />
            </Link>
          </div>
        </div>
        <div className={`${classes.item3} ${classes.item}`}>
          <div>
            <a
              className={classes.a}
              href="https://www.instagram.com/karvenhomedecor/"
              target="_blank"
            >
              <p>
                <AiFillInstagram />
                :/karvenhomedecor
              </p>
            </a>
            <a href="mailto:info@demfirat.com">
              <p>
                <AiOutlineMail />: info@demfirat.com
              </p>
            </a>
          </div>
        </div>
      </div>
      {/* <Link to="/">
        <img src={logo} alt="logo" className={classes.logo} />
      </Link> */}
      <div className={classes.navbar}>
        <Link className={classes.a} to="/">
          Home
        </Link>
        <Link className={classes.a} to="/ProductLines">
          Products
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
        <p
          className={classes.quote}
          style={{
            float: "right",
            marginTop: "20px",
            marginRight: "17px",
            fontSize: "1.1rem",
          }}
        >
          Think Holistic, Think Embroidered
        </p>
      </div>
    </header>
  );
}

export default Header;
