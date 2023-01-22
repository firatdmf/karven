// import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import classes from "./Fabrics.module.css";
import ClassicSheers from "../components/ClassicSheers";
function Fabrics() {
  const whatKind = (e) => {
    let fabricType = e.target.getAttribute("value");
    console.log(fabricType);
    setWhatKindClicked(fabricType)
  };
  const [whatKindClicked, setWhatKindClicked] = useState("");
  return (
    <>
      <div className={classes.description}>
        <p>All our fabrics are 300 cm wide, and made in Turkey. </p>
        <p>We can provide any color combination on any embroidery design</p>
      </div>

      <div className={classes.productCategories}>
        <div className={classes.embroidery}>
          <div className={classes.image}>
            <img
              src="https://i.etsystatic.com/29145365/r/il/7a8d95/3434121151/il_570xN.3434121151_gp0v.jpg"
              alt=""
            />
          </div>
          <div className={classes.title}>
            <h2 onClick={whatKind} value="classic">
              Embroidery Sheers
            </h2>
          </div>
        </div>

        <div className={classes.solid}>
          <div className={classes.image}>
            <img
              src="https://cdn.shopify.com/s/files/1/0558/3725/products/SV570950-White-SheerVoile-A2-224-1X1_1000x.jpg?v=1655237926"
              alt=""
            />
          </div>
          <div className={classes.title}>
            <h2 onClick={whatKind} value="solid">
              Solid Sheers
            </h2>
          </div>
        </div>
      </div>



      <div>{whatKindClicked ? <ClassicSheers whatKindClicked={whatKindClicked} /> : ""}</div>
    </>
  );
}

export default Fabrics;
