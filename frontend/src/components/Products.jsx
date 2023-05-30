import classes from "./Products.module.css";
import { Link, useNavigate } from "react-router-dom";
function Products() {
  return (
    <div className={classes.Products}>
      <h1>Products</h1>

      <div className={classes.container}>
        <div className={classes.product}>
          <img src="/images/ready-made/1337/1337_white/1337_grommets_displayed.jpg" alt="Ready-made Curtain" />
          <h3>Ready-made Curtains</h3>
        </div>
        <div className={classes.product}>
          <img src="/images/kirat/8159.jpg" alt="Embroidered Sheer Fabrics" />
          <h3>Embroidered Sheer Fabrics</h3>
        </div>
        <div className={`${classes.product} ${classes.solidSheerFabrics}`}>
          <img src="/images/fabrics/otto.jpg" alt="Solid Sheer Fabric" />
          <h3>Solid Sheer Fabrics</h3>
        </div>
      </div>
    </div>
  );
}

export default Products;
