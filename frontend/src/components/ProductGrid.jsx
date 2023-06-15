import classes from "./ProductGrid.module.css";
import ProductCard from "./ProductCard";
import { useEffect } from "react";
import { useState } from "react";
import products from "../fabrics.json";
function ProductGrid() {

  const [loadAmount, setloadAmount] = useState(20);
  const [loadedProducts, setloadedProducts] = useState([]);

  useEffect(() => {
    setloadedProducts(products.slice(0, loadAmount));
    function handleScrollEvent() {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        console.log("you're at the bottom of the page");
        setloadAmount(loadAmount + 20);
        console.log(loadAmount);
        // here add more items in the 'filteredData' state from the 'allData' state source.
      }
    }

    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, [loadAmount]);
  return (
    <div className={classes.ProductGrid}>
      <div className={classes.fabrics} >
        {loadedProducts.map((fabric, index) => {
          return <ProductCard key={index} product={fabric} />;
        })}
      </div>
    </div>
  );
}

export default ProductGrid;
