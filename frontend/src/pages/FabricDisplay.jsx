import classes from "./FabricDisplay.module.css";
import { useLocation } from "react-router-dom";
import Spinner from "../components/Spinner";
import PageDoesNotExist from "./PageDoesNotExist";

//axios is needed to send get requests
import axios from "axios";
//useState is needed to create a state and also required for printing objects in react components!,useEffect for rendering a specific part every time the page renders
import { useState, useEffect } from "react";

function FabricDisplay() {
  function imageZoom(imgID, resultID) {
    var img, lens, result, cx, cy;
    img = document.getElementById(imgID);
    result = document.getElementById(resultID);
    /* Create lens: */
    lens = document.createElement("DIV");
    lens.setAttribute("class", "img-zoom-lens");
    /* Insert lens: */
    img.parentElement.insertBefore(lens, img);
    /* Calculate the ratio between result DIV and lens: */
    cx = result.offsetWidth / lens.offsetWidth;
    cy = result.offsetHeight / lens.offsetHeight;
    /* Set background properties for the result DIV */
    result.style.backgroundImage = "url('" + img.src + "')";
    result.style.backgroundSize =
      img.width * cx + "px " + img.height * cy + "px";
    /* Execute a function when someone moves the cursor over the image, or the lens: */
    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);
    /* And also for touch screens: */
    lens.addEventListener("touchmove", moveLens);
    img.addEventListener("touchmove", moveLens);
    function moveLens(e) {
      var pos, x, y;
      /* Prevent any other actions that may occur when moving over the image */
      e.preventDefault();
      /* Get the cursor's x and y positions: */
      pos = getCursorPos(e);
      /* Calculate the position of the lens: */
      x = pos.x - lens.offsetWidth / 2;
      y = pos.y - lens.offsetHeight / 2;
      /* Prevent the lens from being positioned outside the image: */
      if (x > img.width - lens.offsetWidth) {
        x = img.width - lens.offsetWidth;
      }
      if (x < 0) {
        x = 0;
      }
      if (y > img.height - lens.offsetHeight) {
        y = img.height - lens.offsetHeight;
      }
      if (y < 0) {
        y = 0;
      }
      /* Set the position of the lens: */
      lens.style.left = x + "px";
      lens.style.top = y + "px";
      /* Display what the lens "sees": */
      result.style.backgroundPosition = "-" + x * cx + "px -" + y * cy + "px";
    }
    function getCursorPos(e) {
      var a,
        x = 0,
        y = 0;
      e = e || window.event;
      /* Get the x and y positions of the image: */
      a = img.getBoundingClientRect();
      /* Calculate the cursor's x and y coordinates, relative to the image: */
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /* Consider any page scrolling: */
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return { x: x, y: y };
    }
  }

  function capitalize(s) {
    return s && s[0].toUpperCase() + s.slice(1);
  }

  // const location = useLocation();
  // if (location.state == null) {
  //   return <PageDoesNotExist />;
  // }
  // const { from } = location.state;

  // let fabric = from.fabric;

  //below is new
  //-----------------

  const API_URL = "/api/fabrics/";
  // const fabricID = "640bc67decd7396a881223dd"
  const pathname = window.location.pathname;
  const fabricSku = pathname.substring(pathname.lastIndexOf("/") + 1);

  //creating the fabric state
  const [fabric, setFabric] = useState({});
  const [allLoaded, setAllLoaded] = useState(0);
  useEffect(() => {
    const getFabric = async () => {
      try {
        const response = await axios.get(API_URL + fabricSku);
        setFabric(response.data);
        // console.log(response.data);
        setAllLoaded(1);
        return fabric;
      } catch (error) {
        console.log(error);
      }
    };

    getFabric();
  }, []);



  //-----------------

  //if the fabric components is not all loaded then use spinner
  if(!allLoaded){
    return <Spinner/>
  } 
  //if the fabric is not found send them to this page
  if (fabric.message){
    return <PageDoesNotExist/>
  }
  // else if (fabric.content==={}){
  //   return <PageDoesNotExist/>
  // }


  // const imgUrl = require(`../assets/fabricImages/${fabric.imageFileName}`);
  
  // const imgUrl = fabric.image;
  const imageDir = '/images/kirat/'+fabric.sku+'.jpg';
  return (
    <div className={classes.FabricDisplay} fabric={fabric}>
      <div className={classes.container}>
        <div className={classes.image}>
          <a href={imageDir} target="_blank">
            <img src={imageDir} alt="" />
          </a>
        </div>
        <div className={classes.info}>
          <h1 className={classes.fabricName}>{fabric.name}</h1>
          <ul>
            <li>
              <b>SKU: </b>
              {fabric.sku}
            </li>

            <li className={classes.application}>
              <b>Application: </b>
              {capitalize(fabric.use)}
            </li>
            {fabric.abrasion ? (
              <li>
                <b>Double Rubs: </b>
                {fabric.abrasionTest.toLocaleString("en-US")}
              </li>
            ) : (
              ""
            )}

            {fabric.style && (
              <li>
                <b>Type: </b>
                {fabric.style
                  .map((each) => {
                    return capitalize(each);
                  })
                  .join(", ")}
                {/* {capitalize(fabric.style[0])} */}
              </li>
            )}

            <li>
              <b>Theme: </b>
              {fabric.theme}
            </li>
            <li>
              <b>Content: </b>
              {/* {Object.entries(fabric.content)(key,i)=>( key + i
              ))} */}
              {/* {Object.keys(fabric.content)
                .map(
                  (keyName, keyIndex) =>
                    capitalize(keyName) + ": " + fabric.content[keyName] + "%"
                )
                .join(", ")} */}

              {/* {JSON.stringify(fabric.content,null,4)} */}
            </li>
            <li>
              <b>Width: </b>
              {fabric.width +
                " cm" +
                " (" +
                Math.round(fabric.width / 2.54) +
                " inches)"}
            </li>
            <li>
              <b>Origin: </b>
              {fabric.origin}
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.sampleRequest}>
        <h1>Want a sample?</h1>
        {/* <div className={classes.button}>Click here</div> */}
        <p>Send an email to info@karvenhome.com with the SKU number above.</p>
      </div>
    </div>
  );
}

export default FabricDisplay;
