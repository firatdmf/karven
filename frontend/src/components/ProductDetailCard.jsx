import "./ProductDetailCard.css";
import { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import Spinner from "../components/Spinner";
// import PageDoesNotExist from "../pages/PageDoesNotExist";

function ProductDetailCard() {
  const API_URL = "/api/fabrics/";
  const pathname = window.location.pathname;
  const fabricSku = pathname.substring(pathname.lastIndexOf("/") + 1);
  const [fabric, setFabric] = useState({});
  const [loaded, setLoaded] = useState(0);
  // useEffect(() => {
  //   const getFabric = async () => {
  //     try {
  //       const response = await axios.get(API_URL + fabricSku);
  //       setFabric(response.data);
  //       // console.log(response.data);
  //       setLoaded(1);
  //       return fabric;
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   getFabric();
  // }, []);

  //if the fabric components is not all loaded then use spinner
  // if (!loaded) {
  //   return <Spinner />;
  // }
  // //if the fabric is not found send them to this page
  // if (fabric.message) {
  //   return <PageDoesNotExist />;
  // }

  const variantClick = (e) => {
    // let url = new URL(e.currentTarget.src);
    // alert(url);
    // let path = url.pathname;
    setvariantUrl(getVariant(e.currentTarget.src));
  };
  const capitilize = function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };
  const fabricData = {
    sku: "12471",
    // variants: ["G12", "G93", "K23"],
    imgUrl: [
      "/CurtainFabricCodesPics/1149_K12.jpg",
      "/CurtainFabricCodesPics/1149_K62.jpg",
      "/CurtainFabricCodesPics/1149_K23.jpg",
      // "/CurtainFabricCodesPics/1149.jpg",
    ],
    // rolls: 34,
    stock: 103.94,
    type: ["embroidery", "sheer", "classic"],
  };
  let getVariant = (imgUrl) => {
    return imgUrl.substring(imgUrl.indexOf("_") + 1, imgUrl.lastIndexOf("."));
  };
  let variants = [];
  fabricData["imgUrl"].map((item, index) => {
    if (item.includes("_")) {
      variants.push(getVariant(item));
    }
  });
  useEffect(() => {
    console.log(variants.length);
    setvariantUrl(variants[0]);
  }, []);

  const [variantUrl, setvariantUrl] = useState("");
  const [variantArray, setVariantArray] = useState(variants);

  // below is for settings the image carousel look
  const imgs = document.querySelectorAll(".img-select a");
  const imgBtns = [...imgs];
  let imgId = 1;

  imgBtns.forEach((imgItem) => {
    imgItem.addEventListener("click", (event) => {
      event.preventDefault();
      imgId = imgItem.dataset.id;
      slideImage();
    });
  });

  function slideImage() {
    const displayWidth = document.querySelector(
      ".img-showcase img:first-child"
    ).clientWidth;

    document.querySelector(".img-showcase").style.transform = `translateX(${
      -(imgId - 1) * displayWidth
    }px)`;
  }

  window.addEventListener("resize", slideImage);

  // image carousel finishes here
  return (
    <div className="ProductDetailCardPage">
      <div className="card-wrapper">
        <div className="card">
          {/* card left */}
          <div className="product-imgs">
            <div className="img-display">
              <div className="img-showcase">
                {fabricData["imgUrl"].map((item, index) => {
                  return (
                    <img
                      key={index}
                      src={item}
                      alt=""
                      onClick={() => window.open({ item }, "_blank")}
                    />
                  );
                })}
                {/* {fabricData["imgUrl"].map((item, index) => {
                  return <img key={index} src={item} alt="" />;
                })} */}
              </div>
            </div>
            {variantArray.length <= 1 ? (
              ""
            ) : (
              <div className="img-select">
                {console.log("you're not hitting here")}
                {fabricData["imgUrl"].map((item, index) => {
                  return (
                    <div className="img-item" key={index}>
                      <a href="" data-id={index + 1}>
                        {variantUrl === getVariant(item) ? (
                          <img
                            src={item}
                            alt=""
                            className="clicked"
                            onClick={variantClick}
                          />
                        ) : (
                          <img
                            src={item}
                            alt=""
                            className="non-clicked"
                            onClick={variantClick}
                          />
                        )}
                        <p
                          className="variant-label"
                          onClick={() => setvariantUrl(getVariant(item))}
                        >
                          {getVariant(item)}
                        </p>
                      </a>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          {/* card right */}
          <div className="product-content">
            <div className="titles">
              <h2 className="product-title">{fabricData["sku"]}</h2>
              <h1 className="karvenTitle">Karven</h1>
            </div>

            {fabricData["type"].map((item, index) => {
              return (
                <div key={index} className="product-tags">
                  {item}
                </div>
              );
            })}

            {/* <div className="product-rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
              <span>4.7(21)</span>
            </div> */}

            {/* <div className="product-price">
              <p className="last-price">
                Old Price: <span>$257.00</span>
              </p>
              <p className="new-price">
                New Price: <span>$249.00 (5%)</span>
              </p>
            </div> */}

            <div className="product-detail">
              {/* <h2>about this item: </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                eveniet veniam tempora fuga tenetur placeat sapiente architecto
                illum soluta consequuntur, aspernatur quidem at sequi ipsa!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur, perferendis eius. Dignissimos, labore suscipit.
                Unde.
              </p> */}
              <ul>
                <li>
                  SKU: <span>{fabricData["sku"]}</span>
                </li>
                <li>
                  Variants: <span>{variants.join(", ")}</span>
                </li>

                {fabricData["stock"] > 0 ? (
                  <li>
                    Stock: <span>{fabricData["stock"]} Meters</span>
                  </li>
                ) : (
                  <li>"Out of Stock"</li>
                )}

                {/* <li>
                  Use: <span>{fabricData["use"].join(", ")}</span>
                </li> */}
                {/* <li>
                  <label htmlFor="email">Email: </label>
                  <input type="email" name="email" id="" />
                  <button className="sample-request-button">Request a sample</button>
                </li> */}
              </ul>
            </div>

            {/* <div className="purchase-info">
              <input type="number" min="0" value="1" />
              <button type="button" className="btn">
                Add to Cart <i className="fas fa-shopping-cart"></i>
              </button>
              <button type="button" className="btn">
                Compare
              </button>
            </div> */}

            {/* <div className="social-links">
              <p>Share At: </p>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="#">
                <i className="fab fa-pinterest"></i>
              </a>
            </div> */}
            <p>
              At Karven, we specialize in custom fabric orders. Choose your
              colors, fabric type, and embellishments like crystals or pearls
              for a truly personalized touch. Let us bring your unique vision to
              life with our expert craftsmanship. Contact us today to discuss
              your custom order.
            </p>
            <p>Karven - Where Imagination Meets Fabric Perfection</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailCard;
