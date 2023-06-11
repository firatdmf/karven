import classes from "./Home.module.css";
import ProductCategories from "../components/ProductCategories";
import Slider from "../components/slider/Slider";
function Home() {
  return (
    <div className={classes.Home}>
      <div className={classes.slider}>
        <Slider />
      </div>
      <div className={classes.grid1}>
        <div className={classes.newArrivals}>
          <div className={classes.content}>
            <h1>Ready-made Curtains</h1>
            <p>
              Explore the newest and most modern fabrics that have been included
              in our meticulously curated collection.
            </p>
            {/* <Link className={classes.link} to="/fabrics"><div className={classes.button}>View Now</div></Link> */}
            <a
              href="/catalogs/Ready-made Sheer Curtain Panels Catalog.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.link}
            >
              <div className={classes.button}>View Now</div>
            </a>
          </div>
        </div>
        <div className={classes.upholstery}>
          <div className={classes.content}>
            <h1>Upholstery</h1>
            <a
              href="/catalogs/Upholstery Fabrics Catalog.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.link}
            >
              <div className={classes.button}>View Now</div>
            </a>
          </div>
        </div>
        <div className={classes.drapery}>
          <div className={classes.content}>
            <h1>Sheer Plain Fabrics</h1>
            <a
              href="/catalogs/Solid Plain Sheer Fabrics Catalog.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.link}
            >
              <div className={classes.button}>View Now</div>
            </a>
          </div>
        </div>
      </div>

      <div className={classes.grid2}>
        <ProductCategories />
      </div>

      <div className={classes.certifications}>
        <p>Global Recycled Standard | NFPA 701 | GOTS | OEKO TEX</p>
      </div>

      {/* <div className={classes.queries}>
        <div className={classes.text}>
          <h1>For questions and queries:</h1>
        </div>
        <div className={classes.number}>
          <p>+90 (545) 617-0463</p>
        </div>
      </div> */}
    </div>
  );
}

export default Home;
