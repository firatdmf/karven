import React from "react";
import classes from "./Trial2.module.css";
import fabrics from "./fabrics.json";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
function Trial2() {
  let heartIcon;
  if (5 > 3) {
    heartIcon = <BsSuitHeart title="Add to favorites" />;
  } else {
    heartIcon = <BsSuitHeartFill title="Remove from favorites" />;
  }
  let fabric = fabrics[0];
  const imageDir = "images/kirat/" + fabric.sku + ".jpg";
  return (
    <>
      <div className={classes.FabricItem}>
        <div className={classes.card}>
          <div className={classes.image}>
            <img src={imageDir} alt={"Image of the fabric: " + fabric.name} />
          </div>
          {fabric.theme ? (
            <div className={classes.theme}>
              <b>{fabric.theme}</b>
            </div>
          ) : (
            ""
          )}
          <div className={classes.productName}>{fabric.name}</div>
          <div className={classes.SKU}>{fabric.sku}</div>
          {heartIcon}
          {/* <div className={classes.favorites}>Add to Favorites</div> */}
        </div>
      </div>
    </>
  );
}

export default Trial2;
