import classes from "./ProductDetailCard.module.css";
import { useState, useEffect } from "react";
function ProductDetailCard() {
  const variantClick = (e) => {
    let url = new URL(e.currentTarget.src);
    let path = url.pathname;
    console.log(path);
    setvariantUrl(path);
  };
  const fabricData = {
    sku: "12471",
    size: "300 cm",
    imgUrl: [
      "/images/fabrics/1002.jpg",
      "/images/fabrics/1003.jpg",
      "/images/fabrics/1006.jpg",
      "/images/fabrics/1006-2.jpg",
      "/images/fabrics/1008.jpg",
    ],
    stock: 103.94,
  };

  useEffect(() => {
    setvariantUrl(fabricData["imgUrl"][0]);
  }, []);

  const [variantUrl, setvariantUrl] = useState("");
  return (
    <div className={classes.ProductCardPage}>
      <div className={classes.card}>
        <div className={classes.imageCarousel}>
          {fabricData["imgUrl"].map((item, index) => {
            return (
              <div key={index}>
                {item === variantUrl ? (
                  <img
                    src={item}
                    alt=""
                    onClick={variantClick}
                    className={classes.selected}
                  />
                ) : (
                  <img src={item} alt="" onClick={variantClick} />
                )}
              </div>
            );
          })}
        </div>
        <div className={classes.image}>
          <img src={variantUrl} alt="" />
        </div>
        <div className={classes.detail}>
          <div>
            <h1 className={classes.sideKarven}>Karven</h1>
          </div>
          <div>
            <h1>SKU: {fabricData["sku"]}</h1>
            <h3>Size: {fabricData["size"]}</h3>
            <h3>Stock: {fabricData["stock"]}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailCard;
