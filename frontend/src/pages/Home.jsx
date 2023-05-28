// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux"; //we added dispatch, bc we need to dispatch the getGoals
// import GoalForm from "../components/GoalForm";
// import Spinner from "../components/Spinner";
// import { getGoals } from "../features/goals/goalSlice";
// import { reset } from "../features/auth/authSlice";
// import GoalItem from "../components/GoalItem";
// import "./home.css";
// import Slider from "../components/slider/Slider";
import classes from "./Home.module.css";
// import { Link } from "react-router-dom";

function Home() {
  // const capitilize = function (string) {
  //   return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  // };
  // const navigate = useNavigate();
  // const dispatch = useDispatch(); //just initializing the dispatch

  // const { user } = useSelector((state) => state.auth); //useSelector takes in a function and that function takes in a state
  //The below is where you get the goals from the state
  // const { goals, isLoading, isError, message } = useSelector(
  //   (state) => state.goals
  // ); //by state.goals we specify that we want deal with that specifically not the auth state
  // useEffect(() => {
  //   if (isError) {
  //     console.log(message);
  //   }
  //   if (!user) {
  //     navigate("/login");
  //   }
  //   dispatch(getGoals()); //that will fetch the goals from the backend and put it in the const variable goals that we created at the top so we have access to it
  //   //now when we leave the dashboard we want the goals to clear so..
  //   return () => {
  //     dispatch(reset());
  //   };
  // }, [user, navigate, isError, message, dispatch]);

  // if (isLoading) {
  //   return <Spinner />;
  // }

  return (
    <div className={classes.Home}>
      {/* <GoalForm /> */}

      {/* <section className="">
        {goals.length > 0 ? (
          <div className="goals">
            {goals.map((goal) => (
              <GoalItem key={goal._id} goal={goal} />
            ))}
          </div>
        ) : (
          <h3>You have not set any goals</h3>
        )}
      </section> */}

      {/* <div className="container2">
        <div className="zigzag">
          <div className="insi">
            <div className="buttonCenter1">
              <button>MORE</button>
            </div>
          </div>
        </div>
      </div> */}

      {/* 
      <div className="dynamicContainer">
        <div className="content content1">1</div>
        <div className="content content2">2</div>
        <div className="content content3">3</div>
        <div className="content content4">4</div>
        <div className="content content5">5</div>
        <div className="content content6">6</div>
        <div className="content content7">7</div>
        <div className="content content8">8</div>
      </div>
      <div className="catalogButton">View Catalog</div>

      <div className="goodPart">
        <img
          class="imageCenter"
          src="https://karven.ru/design/img/advantages.png"
          alt=""
        />

        <div className="circle circle1">1</div>
        <div className="circle circle2">2</div>
        <div className="circle circle3">3</div>
        <div className="circle circle4">4</div>
        <div className="circle circle5">5</div>
        <div className="circle circle6">6</div>
        <div className="circle circle7">7</div>
        <div className="circle circle8">8</div>

        <div className="circleContent circleContent1">
          circleContent1
          <div className="circle circle1">1</div>
        </div>
        <div className="circleContent circleContent2">circleContent2</div>
        <div className="circleContent circleContent3">circleContent3</div>
        <div className="circleContent circleContent4">circleContent4</div>
        <div className="circleContent circleContent5">circleContent5</div>
        <div className="circleContent circleContent6">circleContent6</div>
        <div className="circleContent circleContent7">circleContent7</div>
        <div className="circleContent circleContent8">circleContent8</div>
      </div> */}

      {/* <p>
        Products: Sheets & pillowcases, blankets, carpets and rugs, fabrics,
        curtains and drapes, shower curtains, towels and robes, table linens,
        kitchen linens
      </p> */}

      {/* <div className={classes.dashboardImages}>
        <div className={classes.image1}>
          <div className={classes.text}>
            <h3>Solid drapery</h3>
            <p>Quickship Feature in just 4 weeks</p>
            <p>--------------------</p>
            <p>SHOP NOW</p>
          </div>
        </div>
        <div className={classes.image2}>

          <div className={classes.text}>
            <h3>Embroidered drapery</h3>
            <p>Quickship Feature in just 4 weeks</p>
            <p>--------------------</p>
            <p>SHOP NOW</p>
          </div>
        </div>
        <div className={classes.image3}></div>
        <div className={classes.image4}></div>
        <div className={classes.image5}></div>
      </div> */}

      {/* --------------------------------------------- */}
      {/* <div className={classes.slider}>
        <Slider />
      </div> */}
      {/* ------------------------------------------------ */}

      {/* <div className={classes.productView}>
        <div className={`${classes.fabrics} ${classes.productItem}`}>
          <a href={classes.fabrics.com}>Fabrics</a>
        </div>
        <div className={`${classes.bedding} ${classes.productItem}`}>
          <a href={classes.fabrics.com}>Bedding</a>
        </div>
        <div className={`${classes.towels} ${classes.productItem}`}>
          <a href={classes.fabrics.com}>Towels</a>
        </div>
        <div className={`${classes.bathrobes} ${classes.productItem}`}>
          <a href={classes.fabrics.com}>Bathrobes</a>
        </div>
      </div> */}

      <div class={classes.announcement}>
        <div class={classes.imageContainer}>
          <img
            src="/images/homeTex1.jpg"
            alt="HomeTex Tradeshow Invitation Flyer Image"
            className={classes.image}
          />
        </div>
        <div class={classes.announcementBox}>
          <h3>You are invited!</h3>
          <p>
            Discover the elegance of embroidered fabrics at our booth in Hall 5,
            Stand A15, during the Home Textile Tradeshow, Hometex in Istanbul.
            Experience exquisite craftsmanship, intricate designs, and a touch
            of sophistication for your interiors. Join us and be inspired.
          </p>
          {/* <p>
            Don't miss this opportunity to experience the beauty of our embroidered fabrics firsthand. We look forward to welcoming you to our booth at the Home Textile Tradeshow.

Date: May 16-20, 2023 <br/>
Time: 10:00 am - 06:00 pm <br/>
Location: Hall 5, Stand A15 <br/>
Istanbul Fuar Merkezi <br/>
Yeşilköy Mah. Atatürk Cad. No: 5/5 <br/> Bakırköy, 34149 İstanbul <br/> TÜRKİYE
</p> */}
          <a href="https://hometex.com.tr/" className={classes.button} target="_blank">
            Learn More
          </a>
        </div>
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
        <h1>New! Turkish Rugs</h1>
        <p>We are proud to announce that we now carry rugs and carpets.</p>
        <div className={classes.haliflex}>
          <div className={classes.woven}>
            <div className={classes.content}>
              <h1>Woven</h1>
              <a
                href="/catalogs/Woven Rug Catalog-compressed.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.link}
              >
                <div className={classes.button}>View Now</div>
              </a>
            </div>
          </div>
          <div className={classes.printed}>
            <div className={classes.content}>
              <h1>Printed</h1>
              <a
                href="/catalogs/Digital Carpet Catalog-compressed.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.link}
              >
                <div className={classes.button}>View Now</div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.grid3}>
        <div className={classes.bedding}>
          <div className={classes.content}>
            <h1>Bedding</h1>
            <a
              href="/catalogs/Bedding.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.link}
            >
              <div className={classes.button}>View Now</div>
            </a>
          </div>
        </div>
      </div>

      <div className={classes.rutgersIE}>
        <div className={`${classes.design} ${classes.descriptionItem}`}>
          <div className={`${classes.icon1} ${classes.icon}`}></div>
          <div className={classes.content}>
            <h2>Design</h2>
            The ordered products get sent to our manufacturing facilities where
            it is designed via computer-aided programs for further processes.
          </div>
        </div>
        <div className={`${classes.sixSigma} ${classes.descriptionItem}`}>
          <div className={`${classes.icon2} ${classes.icon}`}></div>
          <div className={classes.content}>
            <h2>Lean 6sigma</h2>
            After the completion of the design process, our 6sigma certified
            experts will follow the DMAIC step-by-step to meet customer
            requirements as much as possible.
          </div>
        </div>
        <div className={`${classes.shipping} ${classes.descriptionItem}`}>
          <div className={`${classes.icon3} ${classes.icon}`}></div>
          <div className={classes.content}>
            <h2>Shipping</h2>
            As the manufacturing process finishes, the products get packaged and
            shipped to the requested locations by our Supply Chain Management
            expertises.
          </div>
        </div>
        <div className={`${classes.socialMedia} ${classes.descriptionItem}`}>
          <div className={`${classes.icon4} ${classes.icon}`}></div>
          <div className={classes.content}>
            <h2>Social Media</h2>
            You can follow our social media accounts to be the first to hear our
            latest released products.
          </div>
        </div>
        <div className={`${classes.store} ${classes.descriptionItem}`}>
          <div className={`${classes.icon5} ${classes.icon}`}></div>
          <div className={classes.content}>
            <h2>Store</h2>
            You can visit one of our factory stores located in more than 5
            countries.
          </div>
        </div>
        <div className={`${classes.support} ${classes.descriptionItem}`}>
          <div className={`${classes.icon6} ${classes.icon}`}></div>
          <div className={classes.content}>
            <h2>{"Help & Support"}</h2>
            We provide 24/7 customer support line.
          </div>
        </div>
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
