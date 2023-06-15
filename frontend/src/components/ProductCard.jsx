import classes from "./ProductCard.module.css";
import { Link } from "react-router-dom";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
function ProductCard({ product }) {
  // window.onpopstate = () =>{
  //   Link("/hello")
  // }
  // console.log(page);
  let heartIcon;
  const imageDir = "images/kirat/" + product.sku + ".jpg";
  if (5 > 3) {
    heartIcon = <BsSuitHeart title="Add to favorites" />;
  } else {
    heartIcon = <BsSuitHeartFill title="Remove from favorites" />;
  }
  return (
    <div className={classes.ProductCard}>
      <Link
        to={"/fabricDisplay/" + product.sku}
        // state={{
        //   from: {
        //     product: product,
        //   },
        // }}
        onClick={() => {
          window.scroll(0, 0);
        }}
        className={classes.link}
      >
        <div className={classes.card}>
          <div className={classes.image}>
            <img src={imageDir} alt={"Image of the product: " + product.name} />
          </div>
          {product.theme ? (
            <div className={classes.theme}>
              <b>{product.theme}</b>
            </div>
          ) : (
            ""
          )}
          <div className={classes.productName}>{product.name}</div>
          <div className={classes.SKU}>{product.sku}</div>
          {heartIcon}
          {/* <div className={classes.favorites}>Add to Favorites</div> */}
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
