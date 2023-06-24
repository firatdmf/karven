import "./ProductDetailCard.css";
import { useState, useEffect } from "react";
import data from "../products.json";
import PageDoesNotExist from "../pages/PageDoesNotExist";

function ProductDetailCard() {
  const API_URL = "/api/fabrics/";
  const pathname = window.location.pathname;
  const design = pathname.substring(pathname.lastIndexOf("/") + 1);
  const [mainImageUrl, setMainImageUrl] = useState();
  const [selectedVariant, setSelectedVariant] = useState();
  let findObjectWithKey = (array, key, value) => {
    let object;
    array.forEach((item, index) => {
      if (item[key] === value) {
        object = item;
      }
    });
    return object;
  };
  const [products, setProducts] = useState(data);
  const [product, setProduct] = useState(
    findObjectWithKey(products, "design", design)
  );

  let designInitial = (designName) => {
    if (designName.length === 0) {
      return "undefined";
    } else if (designName.length === 5) {
      return "K";
    } else if (designName.length === 4 && designName[0] === "8") {
      return "K";
    } else {
      return "N";
    }
  };

  const capitalize = function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };
  let getVariants = (productInput) => {
    let variantArray = [];
    productInput["files"].forEach((item) => {
      if (item.variant !== "") {
        variantArray.push([capitalize(item.variant)]);
      }
    });
    return variantArray;
  };

  // if (product === null || product === undefined) {
  //   console.log("does not exist");
  //   return <div>Hello!!!</div>;
  // }

  // const [variantUrl, setvariantUrl] = useState("");
  // const [variantArray, setVariantArray] = useState([]);

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

  useEffect(() => {
    // console.log(productVariants.length);
    // setvariantUrl(variantArray[0]);
    // console.log(design);
    // console.log(product);
    // console.log(productVariants);
    if (product) {
      setMainImageUrl("/CurtainFabricCodesPics/" + product.files[0].name);
    }
  }, []);

  if (!product) {
    return <PageDoesNotExist />;
  } else {
    // image carousel finishes here
    return (
      <div className="ProductDetailCardPage">
        <div className="card-wrapper">
          <div className="card">
            {/* card left */}
            <div className="product-imgs">
              <div className="img-display">
                <div className="img-showcase">
                  {product.files.map((item, index) => {
                    return (
                      <img
                        key={index}
                        src={"/CurtainFabricCodesPics/" + item.name}
                        // src={mainImageUrl}
                        alt={item.name}
                        onClick={() =>
                          window.open(
                            "/CurtainFabricCodesPics/" + item.name,
                            "_blank"
                          )
                        }
                      />
                    );
                  })}
                </div>
              </div>
              <div className="img-select">
                {product.files.map((item, index) => {
                  return (
                    <div className="img-item" key={index}>
                      <a href="" data-id={index + 1}>
                        {"/CurtainFabricCodesPics/" + item.name ===
                        mainImageUrl ? (
                          <img
                            src={"/CurtainFabricCodesPics/" + item.name}
                            alt=""
                            className="clicked"
                            onClick={() => {
                              setMainImageUrl(
                                "/CurtainFabricCodesPics/" + item.name
                              );
                            }}
                          />
                        ) : (
                          <img
                            src={"/CurtainFabricCodesPics/" + item.name}
                            alt=""
                            className="non-clicked"
                            onClick={() => {
                              setMainImageUrl(
                                "/CurtainFabricCodesPics/" + item.name
                              );
                            }}
                          />
                        )}
                        <p
                          className="variant-label"
                          onClick={() =>
                            setMainImageUrl(
                              "/CurtainFabricCodesPics/" + item.name
                            )
                          }
                        >
                          {item.variant}
                        </p>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* card right */}
            <div className="product-content">
              <div className="titles">
                <h2 className="product-title">
                  {designInitial(product.design) + product.design}
                </h2>
                <h1 className="karvenTitle">Karven</h1>
              </div>

              <div className="product-detail">
                <ul>
                  <li>
                    Design: <span>{product.design}</span>
                  </li>
                  <li>
                    Length: <span>{product.length} CM</span>
                  </li>
                  <li>
                    Origin: <span>Türkiye</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="sampleRequest">
          <h1>Want a sample?</h1>
          <p>Send an email to info@karvenhome.com with the SKU number above.</p>
        </div>
      </div>
    );
  }
}

export default ProductDetailCard;
