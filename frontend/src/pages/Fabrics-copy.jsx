import FabricItem from "../components/FabricItem";
import { getFabrics } from "../features/fabrics/fabricSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";
import classes from "./Fabrics.module.css";
import FilterForm from "../components/FilterForm";
import { IoArrowBackCircle, IoArrowForwardCircle } from "react-icons/io5";

// import { motion, AnimatePresence } from "framer-motion";

function Fabrics() {
  const pageNumberCalculator = (filteredFabrics, displayAmount) => {
    let array = [];
    for (
      let i = 0;
      i < Math.ceil(filteredFabrics.length / displayAmount);
      i++
    ) {
      array.push(i);
    }
    return array;
  };
  const iteratingArrayCreator = (start, finish) => {
    let array = [];
    for (let i = start; i < finish; i++) {
      array.push(i);
    }
    return array;
  };
  const pageButton = (e) => {
    let pageValue = Number(e.target.value);
    let displayAmountValue = Number(displayAmount);
    // console.log(typeof pageValue);
    let rangeValue = [];
    let startingNo = pageValue * displayAmountValue;
    let finishNo;
    // console.log("the sum is: " + startingNo + displayAmountValue);
    // console.log("filtered fabrics length is: " + filteredFabrics.length);
    if (Number(startingNo + displayAmountValue) < filteredFabrics.length) {
      // alert("going thru here!");
      finishNo = startingNo + displayAmountValue;
    } else {
      finishNo = filteredFabrics.length;
    }
    if (pageValue === 0) {
      rangeValue = iteratingArrayCreator(0, displayAmountValue);
    } else {
      // console.log("display amount value is:" + displayAmountValue);
      // console.log(
      //   "starting value is:" + startingNo + "finish value is:" + finishNo
      // );
      rangeValue = iteratingArrayCreator(startingNo, finishNo);
      // alert('starting no: '+startingNo)
      // alert(displayAmount);
      // alert(finishNo);
    }
    // console.log(rangeValue);
    setPage(pageValue);
    setRange(rangeValue);
    return;
  };

  const displayAmountButton = (e) => {
    let displayAmountValue;
    let rangeValue = [];
    // let pageValue = 0;
    // let startingNo = pageValue * displayAmount;
    // let finishNo = startingNo + displayAmount;
    setPage(0);
    if (e.target.value === "all") {
      displayAmountValue = filteredFabrics.length;
    } else {
      displayAmountValue = e.target.value;
    }
    setdisplayAmount(displayAmountValue);
    rangeValue = iteratingArrayCreator(0, displayAmountValue);
    setRange(rangeValue);
    // let pages = pageNumberCalculator(filteredFabrics, displayAmount);
    pages = pageNumberCalculator(filteredFabrics, displayAmount);
    return;
  };

  const pageArrowButton = (e) => {
    let pageValue = e.target.value;
    alert(pageValue);
    if (pageValue === "next") {
      setPage(pageValue + 1);
    } else if (pageValue === "prev") {
      setPage(pageValue - 1);
    }
    alert(pageValue);
    return;
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { fabrics, isLoading, isError, message } = useSelector(
    (state) => state.fabrics
  );
  // const [filtered, setFiltered] = useState([])
  // const [activeGenre, setActiveGenre] = useState("")
  const [selectedOrigin, setSelectedOrigin] = useState({
    "United States": false,
    Italy: false,
  });
  const [selectedEndUse, setSelectedEndUse] = useState({
    curtain: false,
    upholstery: false,
    multipurpose: false,
  });
  const [allStates, setAllStates] = useState({
    selectedEndUse,
    selectedOrigin,
  });
  // const [draperyChecked, setDraperyChecked] = useState(false);
  // const [upholsteryChecked, setUpholsteryChecked] = useState(false);
  // const [multipurposeChecked, setMultipurposeChecked] = useState(false);
  const [filteredFabrics, setFilteredFabrics] = useState({});
  const [page, setPage] = useState(0);
  const [displayAmount, setdisplayAmount] = useState(60);
  let pages = pageNumberCalculator(filteredFabrics, displayAmount);
  // const [pages, setpages] = useState(()=>(pageNumberCalculator(filteredFabrics,displayAmount)));
  const [range, setRange] = useState(
    iteratingArrayCreator(page, displayAmount)
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    // if (!user) {
    //   navigate("/login");
    // }
    dispatch(getFabrics());
    //that will fetch the goals from the backend and put it in the const variable goals that we created at the top so we have access to it

    //now when we leave the dashboard we want the goals to clear so..
    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className={classes.fabricsJSX}>
      <div className={classes.bread}>
        Home <span style={{ fontSize: "10px" }}>{">"}</span> Fabrics
      </div>
      <section className={classes.container}>
        <div className={classes.resultsInfo}>
          <div>
            Showing{" "}
            {range[0] +
              1 +
              " - " +
              (range[0] + 1 + displayAmount < filteredFabrics.length
                ? range[range.length - 1] + 1
                : filteredFabrics.length)}{" "}
            of {filteredFabrics.length} results
          </div>
          {/* <span className={classes.floatRight}>
            View:{" "}
            <div value={60} onClick={displayAmountButton}>
              60
            </div>
            <div value={120} onClick={displayAmountButton}>
              120
            </div>
            <div value={"all"} onClick={displayAmountButton}>
              All
            </div>
          </span> */}
        </div>

        <div className={classes.cover}>
          <div className={classes.headlineBox}>Fabric</div>
        </div>
        <div className={classes.headlineBox2}>Fabric</div>
        <div className={classes.filter}>
          <FilterForm
            fabrics={fabrics}
            selectedOrigin={selectedOrigin}
            setSelectedOrigin={setSelectedOrigin}
            // draperyChecked={draperyChecked}
            // setDraperyChecked={setDraperyChecked}
            // upholsteryChecked={upholsteryChecked}
            // setUpholsteryChecked={setUpholsteryChecked}
            // multipurposeChecked={multipurposeChecked}
            // setMultipurposeChecked={setMultipurposeChecked}
            selectedEndUse={selectedEndUse}
            setSelectedEndUse={setSelectedEndUse}
            setFilteredFabrics={setFilteredFabrics}
            allStates={allStates}
            setAllStates={setAllStates}
          />
        </div>

        {/* Now on the product display section */}
        <div className={classes.fabricSection}>
          {filteredFabrics.length > 0 ? (
            <div className={classes.fabrics}>
              {filteredFabrics.map((fabric, index) =>
                // index < fabricDisplayRange ? (
                range.includes(index) ? (
                  <FabricItem
                    key={fabric._id}
                    fabric={fabric}
                    className={classes.fabricItem}
                    page={page}
                  />
                ) : (
                  ""
                )
              )}
            </div>
          ) : (
            <h3>You have not set any fabric</h3>
          )}
        </div>
      </section>
      <div className={classes.pagesInfo}>
        {pages.length > 1 ? (
          <div className={classes.cardSwitch}>
            <div className={classes.pageNumbers}>
              {page === 0 ? (
                ""
              ) : (
                <IoArrowBackCircle
                  value="prev"
                  className={classes.pageArrowButton}
                  onClick={() => {
                    // alert(page);
                    let pageValue = page;
                    let newPageValue = pageValue - 1;
                    let displayAmountValue = Number(displayAmount);
                    let rangeValue = [];
                    let startingNo = newPageValue * displayAmountValue;
                    let finishNo;
                    // console.log("the sum is: " + startingNo + displayAmountValue);
                    // console.log("filtered fabrics length is: " + filteredFabrics.length);
                    if (
                      Number(startingNo + displayAmountValue) <
                      filteredFabrics.length
                    ) {
                      // alert("going thru here!");
                      finishNo = startingNo + displayAmountValue;
                    } else {
                      finishNo = filteredFabrics.length;
                    }
                    if (newPageValue === 0) {
                      rangeValue = iteratingArrayCreator(0, displayAmountValue);
                    } else {
                      // console.log("display amount value is:" + displayAmountValue);
                      // console.log(
                      //   "starting value is:" + startingNo + "finish value is:" + finishNo
                      // );
                      rangeValue = iteratingArrayCreator(startingNo, finishNo);
                      // alert('starting no: '+startingNo)
                      // alert(displayAmount);
                      // alert(finishNo);
                    }
                    setPage(newPageValue);
                    setRange(rangeValue);
                    return;
                  }}
                />
              )}
              {pages.map(
                (item, index) =>
                  page === item ? (
                    <button
                      className={`${classes.numbers} ${classes.selectedPage}`}
                      key={index}
                      value={item}
                      onClick={pageButton}
                    >
                      {index + 1}
                    </button>
                  ) : (
                    <button
                      className={classes.numbers}
                      key={index}
                      value={item}
                      onClick={pageButton}
                    >
                      {index + 1}
                    </button>
                  )
                // <button
                //   className={classes.numbers}
                //   key={index}
                //   value={item}
                //   onClick={pageButton}
                // >
                //   {index + 1}
                // </button>
              )}
              {page === pages.length - 1 ? (
                ""
              ) : (
                <IoArrowForwardCircle
                  value="next"
                  className={classes.pageArrowButton}
                  onClick={() => {
                    // alert(page);
                    let pageValue = page;
                    let newPageValue = pageValue + 1;
                    let displayAmountValue = Number(displayAmount);
                    let rangeValue = [];
                    let startingNo = newPageValue * displayAmountValue;
                    let finishNo;
                    // console.log("the sum is: " + startingNo + displayAmountValue);
                    // console.log("filtered fabrics length is: " + filteredFabrics.length);
                    if (
                      Number(startingNo + displayAmountValue) <
                      filteredFabrics.length
                    ) {
                      // alert("going thru here!");
                      finishNo = startingNo + displayAmountValue;
                    } else {
                      finishNo = filteredFabrics.length;
                    }
                    if (newPageValue === 0) {
                      rangeValue = iteratingArrayCreator(0, displayAmountValue);
                    } else {
                      // console.log("display amount value is:" + displayAmountValue);
                      // console.log(
                      //   "starting value is:" + startingNo + "finish value is:" + finishNo
                      // );
                      rangeValue = iteratingArrayCreator(startingNo, finishNo);
                      // alert('starting no: '+startingNo)
                      // alert(displayAmount);
                      // alert(finishNo);
                    }
                    setPage(newPageValue);
                    setRange(rangeValue);
                    return;
                  }}
                />
              )}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Fabrics;
