import "./classicSheers.css";
// import { fabricData } from "../assets/fabricData.jsx";
import {fabricData} from "../assets/fabricDB.js";
// import {fabric_csv} from "../assets/fabricData.csv"
// import {fabricFiles} from "../../../nothing/Trial";
// import Spinner from "../components/Spinner";
import { useEffect, useState } from "react";
function ClassicSheers({whatKindClicked}) {
 


  // const showFilter = () => {
  //   setFilterClicked(!filterClicked);
  // };
  const [filterClicked, setFilterClicked] = useState(false);
  // console.log(fabric_csv);

  // To make the below work you need to bring it from the redux like in the FabricsDisplay.jsx file
  // if (isLoading) {
  //   return <Spinner />;
  // }
  // const newPathway= "../../../../../../../../Documents/PearlinsLinen/Marketing/Web/pearlinslinen.com/Products/CurtainFabric/CurtainFabricCodesPics/"

  return (
    <div className="Products">
      <h1 className="productCategory">Fabrics</h1>
      <div className="bigFlex">
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
        <div className="productFlex">
          <div className="productGrid">
            {fabricData.filter(fabric=>fabric.style ===whatKindClicked).map((fabric, index) => {
              return (
                <div className="card">
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
