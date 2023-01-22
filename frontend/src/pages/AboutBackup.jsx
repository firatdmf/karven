import classes from "./About.module.css";
// import posterImage from "../assets/poster.jpg";
import coverVideo from "../assets/karven.mp4";
import footerVideo from "../assets/karvenFooter.mp4";
function About() {
  return (
    <div className={classes.about}>
      <div className={classes.video}>
        <video autoPlay loop muted className={classes.videoItself}>
          <source src={coverVideo} type="video/mp4" />
        </video>
      </div>
      <h2 className={classes.separatorHeadline}>
        ...Pearlins Linen is the US branch of the textile manufacturing group
        Demfirat Karven Tekstil.
      </h2>
      <div className={classes.headText}>
        <h3>IMPRESSIVE</h3>
        <h2>FOUNDER'S STORY</h2>
        <br />
        <p>
          Our parent company, Dem Fırat Karven Tekstil, was established in 1991
          in Istanbul by Cuma Ozturk. Cuma was the eldest child in a family with
          21 kids. He grew up near the Iranian border on the rural side of
          Turkey. Because of the lack of resources during his childhood, he
          dropped out of school at the age of nine and started working at local
          shops.
        </p>
      </div>

      <div className={classes.gridContainer}>
        <div
          className={`${classes.area1} ${classes.span1} ${classes.textCenter}`}
        >
          <h1>BROAD SHOULDERS</h1>
          <br />
          <p>
            Cuma's parents' negligence and being the eldest among his siblings
            left him with an immense responsibility to work hard and provide for
            his family. So to make money fast, he started crossing the Iranian
            border as a kid to buy goods at a cheaper rate, then brought and
            traded them in Turkey.
          </p>
          <br />
          <p>
            Yet, after getting caught numerously and punished by the
            authorities, he knew he needed to find a long-term, less risky
            alternative. So at 13, he moved to the West of Turkey all by himself
            for better job opportunities. After a decade of hard, laborious work
            at construction sites, restaurants, and retail shops on the West
            side of the country, in 1991, at the age of 23, he opened his first
            textile shop in Laleli, Istanbul, with a business partner. However,
            in 1997, when his first child was born (that's me!), the partners
            had disagreements, leading them to separate ways.
          </p>
        </div>
        <div className={`${classes.area2} ${classes.span2}`}>
          <img
            src="https://cdn.shopify.com/s/files/1/0570/3945/4375/files/ec1d7292-a258-4e1c-a520-d17cf5f3d585_51cb89ce-8118-4b60-a48a-0f63cb7e5344_1080x.jpg?v=1660333805"
            alt=""
          />
        </div>
        <div className={`${classes.area3} ${classes.span2}`}>
          <div className={classes.images}>
            <img
              className={classes.image1}
              src="https://cdn.shopify.com/s/files/1/0570/3945/4375/files/Adobe_Scan_Aug_12_2022_1_copy_750x.jpg?v=1660328915"
              alt=""
            />
            <img
              className={classes.image2}
              src="https://cdn.shopify.com/s/files/1/0570/3945/4375/files/Adobe_Scan_Aug_12_2022_1_2_750x.jpg?v=1660328940"
              alt=""
            />
          </div>
        </div>
        <div className={`${classes.area4} ${classes.span1}`}>
          <h3>GOING SOLO</h3>
          <h1>1997</h1>
          <br />
          <p>
            Although his former partners tried to discourage and force him out
            of business, this only powered him to open his own textile store.
            His genuine attitude and fine quality of his products made his shop
            recognized. With the growing demand, he started bringing his
            siblings left on the East side of the country and employing them one
            after the other.
          </p>
        </div>

        <div className={`${classes.area5} ${classes.span1}`}>
          <h3>FIRST STEP TO OVERSEAS</h3>
          <h1>2004</h1>
          <p>
            Cuma and his siblings opened their first abroad warehouse in Moscow
            and started supplying Turkish textiles to the Russian market, later
            expanding to Ukraine, Belarus, and Kazakhstan.
          </p>
        </div>
        <div className={`${classes.area6} ${classes.span2}`}>
          <img
            src="https://cdn.shopify.com/s/files/1/0570/3945/4375/files/DadRussia_2f8a40e1-b231-49e1-bce5-3850923687ad_1080x.jpg?v=1660333969"
            alt=""
          />
        </div>
        <div className={`${classes.area7} ${classes.span2}`}>
          <img
            src="https://cdn.shopify.com/s/files/1/0570/3945/4375/files/Karven_Tekstil_Factory-Exterior_1080x.jpg?v=1660321830"
            alt=""
          />
        </div>
        <div className={`${classes.area8} ${classes.span1}`}>
          <h3>MANUFACTURING</h3>
          <h1>2014</h1>
          <p>
            Soon Cuma's manufacturing partners could not meet his growing market
            demand. So, he acquired 60,000 SF of empty land and built his first
            textile mill just an hour from Istanbul to fully supervise the
            production and cut unnecessary costs bearing his clients.
          </p>
        </div>

        <div className={`${classes.area9} ${classes.span1}`}>
          <div className={classes.textCenter}>
            <h3>GRATITUDE</h3>
            <h1>2020</h1>
            <p>
              Having started a successful company and being able take care of
              his siblings by employing them has made Cuma's dreams come true.
            </p>
            <p>
              Dem Fırat Karven started as a small family-run textile shop in
              Istanbul in 1991. Today we grew into a manufacturing plant that
              produces over 20 million yards of fabric every month and supplies
              all around the globe with its strong supply chain network.
            </p>
            <p>
              The growth has been an exciting and ever-changing journey.
              However, our core values have always stayed the same. Our growing
              family is what encourages us to continue providing high-quality
              products and exceptional customer service.
            </p>
          </div>
        </div>
        <div className={`${classes.area10} ${classes.span2}`}>
          <img
            src="https://cdn.shopify.com/s/files/1/0570/3945/4375/files/85d1191e-7e92-43bc-aa1e-eb641086e272_1080x.jpg?v=1660327910"
            alt=""
          />
        </div>
        <div className={`${classes.area11} ${classes.span2}`}>
          <img
            src="https://cdn.shopify.com/s/files/1/0570/3945/4375/files/IMG_2220_1080x.jpg?v=1660322339"
            alt=""
          />
        </div>
        <div className={`${classes.area12} ${classes.span1}`}>
          <img
            src="https://cdn.shopify.com/s/files/1/0570/3945/4375/files/Z_Moe_at_the_HD_Expo_900x.jpg?v=1660275883"
            alt=""
          />
        </div>

        <div className={`${classes.area13} ${classes.span1}`}>
          <h3>PEARLINS LINEN</h3>
          <h1>2021</h1>
          <p>
            In 2021, we created our US sister company, Pearlins Linen, to
            distribute fabrics and textiles produced in our family mill.
          </p>
          <br />
          <p>
            Today, Pearlins Linen is the leading distributor of home textiles
            and interior fabrics in the US market, serving the hospitality,
            department stores, converters, furniture manufacturers, jobbers, and
            more.
          </p>
        </div>
        {/* <div className={`${classes.area14} ${classes.span2}`}></div> */}
        {/* <div className={classes.area15}></div>
        <div className={`${classes.area16} ${classes.span2}`}></div> */}
        {/* 
        <div className={`${classes.area17} ${classes.span2}`}></div>
        <div className={classes.area18}></div>
        <div className={classes.area19}></div>
        <div className={`${classes.area20} ${classes.span2}`}></div>

        <div className={`${classes.area21} ${classes.span2}`}></div>
        <div className={classes.area22}></div>
        <div className={classes.area23}></div>
        <div className={`${classes.area24} ${classes.span2}`}></div>

        <div className={`${classes.area25} ${classes.span2}`}></div>
        <div className={classes.area26}></div>
        <div className={classes.area27}></div>
        <div className={`${classes.area28} ${classes.span2}`}></div> */}
        {/* <div className={classes.area5}></div>
        <div className={classes.area6}></div>
        <div className={classes.area7}></div>
        <div className={classes.area8}></div>
        <div className={classes.area9}></div>
        <div className={classes.area10}></div>
        <div className={classes.area11}></div>
        <div className={classes.area12}></div>
        <div className={classes.area13}></div>
        <div className={classes.area14}></div> */}
      </div>
      <div className={classes.video2}>
        <video autoPlay loop muted className={classes.videoItself}>
          <source src={footerVideo} type="video/mp4" />
        </video>
        <div className={classes.text}>
          <h3>STAY TUNED!</h3>
          <h2>2024</h2>
          <br />
          <p>
            We are constantly continuing to look for the next first—we are not
            done innovating yet.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
