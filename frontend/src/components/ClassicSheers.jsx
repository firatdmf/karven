import classes from "./ClassicSheers.module.css";
// import { fabricData } from "../assets/fabricData.jsx";
import {fabricData} from "../assets/fabricDB.js";
// import {fabric_csv} from "../assets/fabricData.csv"
// import {fabricFiles} from "../../../nothing/Trial";
// import Spinner from "../components/Spinner";
import { useEffect, useState } from "react";
function ClassicSheers() {
 
  return (
    <div className={classes.classicSheers}>
      <h1 className={classes.productCategory}>Fabrics</h1>
      <div className={classes.bigFlex}>
        {/* below is the filter code for later */}
        {/* <div className="filterFlex">
          <button className="filterBy" onClick={showFilter}>
            FILTERY BY
          </button>
          {filterClicked ? (
            <div className="mobileFilterPage">
              <div className="closeButton" onClick={showFilter}></div>
              <ul>
                <li>Filter</li>
              </ul>
            </div>
          ) : (
            ""
          )}
        </div> */}
        <div className={classes.productFlex}>
          <div className={classes.productGrid}>
            {fabricData.map((fabric, index) => {
              return (
                <div className={classes.card}>
                  {fabric.name}
                  <img src={'images/fabrics/'+fabric.name+'.jpg'} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClassicSheers;
