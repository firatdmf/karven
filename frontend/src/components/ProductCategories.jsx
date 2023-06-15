import classes from "./ProductCategories.module.css";
import { Link, useNavigate } from "react-router-dom";
function ProductCategories() {
  let productCategories = [
    // {
    //   name: "Read-made Curtains",
    //   link: "#",
    //   imgLink: "/images/ready-made/1337/1337_white/1337_grommets_displayed.jpg",
    //   alt: "Ready Made Curtain",
    // },
    {
      name: "Embroidered Sheer Fabrics",
      link: "/Trial2",
      imgLink: "/images/kirat/8159.jpg",
      alt: "Embroidered Sheer Fabrics",
    },
    // {
    //   name: "Solid Sheer Fabrics",
    //   link: "#",
    //   imgLink: "/images/fabrics/otto.jpg",
    //   alt: "Solid Sheer Fabrics",
    // },
    // {
    //   name:'Bridal Fabrics',
    //   link: '#',
    //   imgLink: "/BridalCodesPics/FL_7016.jpg",
    //   alt:"Bridal Sheer Fabrics"
    // }
  ];

  return (
    <div className={classes.Products}>
      <h1>Products</h1>
      <div className={classes.container}>
        {productCategories.map((item, index) => {
          return (
            <Link to={item.link} className={classes.link} key={index}>
              <div className={classes.product}>
                <img src={item.imgLink} alt={item.alt} />
                <h3>{item.name}</h3>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  );
}

export default ProductCategories;
