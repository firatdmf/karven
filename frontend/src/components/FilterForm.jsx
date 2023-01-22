import classes from "./FilterForm.module.css";
import { useEffect } from "react";
function FilterForm({
  fabrics,
  setFilteredFabrics,
  selectedEndUse,
  setSelectedEndUse,
  selectedOrigin,
  setSelectedOrigin,
  allStates,
  setAllStates,
}) {
  const allFalseObject = (selectedObject) => {
    return Object.values(selectedObject).every((value) => !value);
  };

  // just went a little nuts below.
  // const filterBy = (filteredData,selectedObject) =>{
  //   if(allFalseObject(selectedObject)){
  //     return filteredData;
  //   }else{
  //     let arr = [];
  //     for(let property in selectedObject){
  //       if(selectedObject[property]===true){
  //         arr.push(filteredData.filter((fabric)=>fabric))
  //       }
  //     }
  //   }
  // }

  const filterByEndUse = (filteredData) => {
    //below checks if all the key values are false in the selectedPattern object.
    // const allFalse = Object.values(selectedEndUse).every((value) => !value);
    if (allFalseObject(selectedEndUse)) {
      return filteredData;
    }
    let arr = [];
    for (let property in selectedEndUse) {
      if (selectedEndUse[property] === true) {
        arr.push(filteredData.filter((fabric) => fabric.endUse === property));
      }
    }
    return Array.prototype.concat.apply([], arr);
  };

  const filterByOrigin = (filteredData) => {
    if (allFalseObject(selectedOrigin)) {
      return filteredData;
    }
    let arr = [];
    for (let property in selectedOrigin) {
      if (selectedOrigin[property] === true) {
        arr.push(filteredData.filter((fabric) => fabric.origin === property));
      }
    }
    return Array.prototype.concat.apply([], arr);
  };

  const checkHandle = (e) => {
    const value = e.target.value;
    const stateName = e.target.name;
    let obj = {};
    Object.keys(allStates).forEach((key) => {
      obj[key] = allStates[key];
    });
    if (value === "reset") {
      Object.keys(obj[stateName]).forEach((key) => {
        obj[stateName][key] = false;
      });
    } else {
      obj[stateName][value] = !obj[stateName][value];
    }
    setAllStates(obj);
    return;
  };

  useEffect(() => {
    let filteredData = filterByEndUse(fabrics);
    filteredData = filterByOrigin(filteredData);
    setFilteredFabrics(filteredData);
    // eslint-disable-next-line
  }, [selectedEndUse, selectedOrigin, allStates]);

  return (
    <>
      <div className={classes.filter}>
        <h3>FILTER BY</h3>
        <div className={classes.filterCategories}>
          <div className={classes.endUse}>
            END USE
            <button name="selectedEndUse" value="reset" onClick={checkHandle}>
              x Clear Filter
            </button>
            <br />
            <label htmlFor="drapery">Drapery</label>
            <input
              name="selectedEndUse"
              value="drapery"
              type="checkbox"
              checked={allStates.selectedEndUse.drapery}
              onChange={checkHandle}
            />
            <label htmlFor="upholstery">Upholstery</label>
            <input
              name="selectedEndUse"
              value="upholstery"
              type="checkbox"
              checked={allStates.selectedEndUse.upholstery}
              onChange={checkHandle}
            />
            <label htmlFor="multipurpose">Multipurpose</label>
            <input
              name="selectedEndUse"
              value="multipurpose"
              type="checkbox"
              checked={allStates.selectedEndUse.multipurpose}
              onChange={checkHandle}
            />
          </div>
          <div className={classes.type}>TYPE</div>
          <div className={classes.durability}>DURABILITY RANGE</div>

          <div className={classes.collection}>COLLECTION</div>
          <div className={classes.origin}>
            Origin
            <button name="selectedOrigin" value="reset" onClick={checkHandle}>
              x Clear Filter
            </button>
            <label htmlFor="United States">United States</label>
            <input
              name="selectedOrigin"
              value="United States"
              type="checkbox"
              checked={allStates.selectedOrigin["United States"]}
              onChange={checkHandle}
            />
            <label htmlFor="Italy">Italy</label>
            <input
              name="selectedOrigin"
              value="Italy"
              type="checkbox"
              checked={allStates.selectedOrigin["Italy"]}
              onChange={checkHandle}
            />
          </div>

          <div className={classes.additional}>ADDITIONAL OPTIONS</div>
          <div className={classes.productStatus}>PRODUCT STATUS</div>
          <div className={classes.care}>CARE</div>
          <div className={classes.flammability}>FLAMMABILITY</div>
          <div className={classes.performance}>PERFORMANCE</div>
          <div className={classes.properties}>PROPERTIES</div>
          <div className={classes.sustainability}>SUSTAINABILITY</div>
        </div>
      </div>
    </>
  );
}

export default FilterForm;
