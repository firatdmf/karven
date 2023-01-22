// import classes from "./Trial.module.css";
// import { motion } from "framer-motion";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import classes from "./FabricItem.module.css";
function FabricItem({fabric}) {
  let heartIcon;
  const imageDir = require(`../assets/fabricImages/${fabric.imageFileName}`);
  //.card.card-${$}*3
  if (5 > 3) {
    heartIcon = <BsSuitHeart title="Add to favorites" />;
  } else {
    heartIcon = <BsSuitHeartFill title="Remove from favorites" />;
  }
  return (<
  // <motion.div
    // layout
    // animate={{ opacity: 1 }}
    // initial={{ opacity: 0 }}
    // exit={{ opacity: 0 }}
    // transition={{duration:2}}
  >
        <div className={classes.card}>
          <div className={classes.picture}><img className={classes.avatar} src={imageDir} alt="" /></div>
          <div className={classes.collectionName}>
            <b>{fabric.collectionName}</b>
          </div>
          
          <div className={classes.productName}>{fabric.name}</div>
          <div className={classes.SKU}>{fabric.sku}</div>
          {heartIcon}
    </div>
    </>
  );
}

export default FabricItem;
