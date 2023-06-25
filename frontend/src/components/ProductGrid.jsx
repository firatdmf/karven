import classes from "./ProductGrid.module.css";
import ProductCard from "./ProductCard";
import { useEffect } from "react";
import { useState } from "react";
// import products from "../fabrics.json";
import products from "../products.json";
import { FaSearch } from "react-icons/fa";

function ProductGrid() {
  const [loadAmount, setloadAmount] = useState(20);
  const [loadedProducts, setloadedProducts] = useState([]);
  const [filterUsed, setfilterUsed] = useState(false);
  const filter = (e) => {
    let searchTerm = e.currentTarget.value;
    let boole = false;
    if (searchTerm) {
      boole = true;
    }
    setfilterUsed(boole);
    // console.log(e);
    // console.log(filterUsed);
    let array = [];
    products.map((item, index) => {
      if (
        item.design.includes(e.currentTarget.value, 0)
        // item.design.includes(e.currentTarget.value.slice(0, -1))
      ) {
        array.push(item);
      }
    });
    // let filteredData = Array.prototype.concat.apply([], array);
    setloadedProducts(array);
  };

  useEffect(() => {
    setloadedProducts(products.slice(0, loadAmount));
    function handleScrollEvent() {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 20 &&
        filterUsed === false
      ) {
        // console.log("you're at the bottom of the page");

        setloadAmount(loadAmount + 20);
        // console.log(loadAmount);
        // here add more items in the 'filteredData' state from the 'allData' state source.
      }
    }
    window.addEventListener("scroll", handleScrollEvent);
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, [loadAmount, filterUsed]);
  return (
    <div className={classes.ProductGrid}>
      <div className={classes.cover}>
        <div className={classes.headlineBox}>Embroidery</div>
      </div>
      {/* search bar below */}
      <div className={classes.wrap}>
        <div className={classes.search}>
          <input
            type="text"
            className={classes.searchTerm}
            placeholder="Enter design number"
            onChange={filter}
          />
          <button type="submit" className={classes.searchButton}>
            {/* <i class="fa fa-search"></i> */}
            <FaSearch />
          </button>
        </div>
      </div>
      {/* search bar ends here */}
      <div className={classes.products}>
        {loadedProducts.map((product, index) => {
          return <ProductCard key={index} product={product} />;
        })}
      </div>
      {filterUsed === false ? (
        <div
          className={classes.loadMoreButton}
          onClick={() => {
            setloadAmount(loadAmount + 20);
          }}
        >
          Load More
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default ProductGrid;
