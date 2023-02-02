// import classes from "./Trial.module.css";
// import { motion } from "framer-motion";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import classes from "./FabricItem-backup.module.css";
import { Link } from "react-router-dom";
function FabricItem({ fabric }) {
  let heartIcon;
  const imageDir = require(`../assets/fabricImages/${fabric.imageFileName}`);
  //.card.card-${$}*3
  if (5 > 3) {
    heartIcon = <BsSuitHeart title="Add to favorites" />;
  } else {
    heartIcon = <BsSuitHeartFill title="Remove from favorites" />;
  }
  return (
    <div className={classes.FabricItem}>
      {/* <Link to="/trial" state={{from:{sku:fabric.sku,name:fabric.name,img:fabric.imageFileName}}}> */}
      <Link
        to="/fabricDisplay"
        state={{
          from: {
            fabric: fabric,
          },
        }}
        onClick={() => {
          window.scroll(0, 0);
        }}
        className={classes.link}
      >
        <div className={classes.card}>
          <div className={classes.image}>
            <img src={imageDir} alt={"Image of the fabric: " + fabric.name} />
          </div>
          {fabric.collectionName ? (
            <div className={classes.collectionName}>
              <b>{fabric.collectionName}</b>
            </div>
          ) : (
            ""
          )}
          <div className={classes.productName}>{fabric.name}</div>
          <div className={classes.SKU}>{fabric.sku}</div>
          {heartIcon}
          {/* <div className={classes.favorites}>Add to Favorites</div> */}
        </div>
      </Link>
    </div>
  );
}

export default FabricItem;
