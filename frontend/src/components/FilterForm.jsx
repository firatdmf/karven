import React from 'react'
import './filterForm.css'
import { useEffect } from "react";
import { useState } from "react";



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
    const [isToggled, setIsToggled] = useState({ brand: false, "model": false, "year": false, "location": false});
    // let toggle = 'toggled';

    const toggleClass = (e) => {
        // alert(e.currentTarget.id)
        let obj = {}
        Object.keys(isToggled).forEach((key) => {
            obj[key] = isToggled[key];
          });
        
        let key = e.target.id;
        obj[key] = !obj[key]
        setIsToggled(obj)
    }

    const expandClass = (e) => {
        let itsclass = e.target.className;
        if (itsclass === 'toggle') {
            e.target.className = 'toggled';
        } else {
            e.target.className = 'toggle';
        }
    }

    const allFalseObject = (selectedObject) => {
        return Object.values(selectedObject).every((value) => !value);
    };

    const filterByEndUse = (filteredData) => {
        //below checks if all the key values are false in the selectedPattern object.
        // const allFalse = Object.values(selectedEndUse).every((value) => !value);
        if (allFalseObject(selectedEndUse)) {
            return filteredData;
        }
        let arr = [];
        for (let property in selectedEndUse) {
            if (selectedEndUse[property] === true) {
                arr.push(filteredData.filter((fabric) => fabric.use === property));
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
        // // console.log(typeof(fabrics));
        // // console.log(fabrics);
        // let sheerEmbroidery = Object.entries(fabrics).filter((fabric) => fabric[1].fabric[0]==="sheer" && fabric[1].patternType==='embroidery')[1]
        // console.log(sheerEmbroidery);
        let filteredData = filterByEndUse(fabrics);
        filteredData = filterByOrigin(filteredData);

        //now I am setting everything (filtering) only to embroidered sheer fabrics
        let arr = [];
        arr.push(filteredData.filter((fabric) => fabric.fabric[0] === "sheer" && fabric.patternType==='embroidery'));
        filteredData = Array.prototype.concat.apply([], arr);
        //--------


        
        setFilteredFabrics(filteredData);
        // eslint-disable-next-line
    }, [selectedEndUse, selectedOrigin, allStates]);

    return (
        <div className='FilterForm'>
            <div className="container">


<div className="a-filter">

  <div className="title">Filter Fabrics</div>

  <form action="">

    <section>
      <label>Search</label>
      <input type="text" placeholder="Enter SKU # or name" name="sku" onChange={checkHandle}/>
    </section>


    <section>
      <label>Filter</label>

      <div className="options">
        <label id="brand" onClick={toggleClass}>Brand</label>
        <div className={isToggled.brand === false ? "toggle" : "toggle toggled"}><span></span><span></span></div>
        <div className={isToggled.brand===false?"expands":"expands open"}>
          {/* <input type="checkbox" name="vehicle" value="Cessna"/>Cessna<br/>
          <input type="checkbox" name="vehicle" value="Beechcraft"/>Beechcraft<br/>
          <input type="checkbox" name="vehicle" value="Hawker"/>Hawker<br/> */}

          <input
            name="selectedEndUse"
            id="curtain"
            value="curtain"
            type="checkbox"
            checked={allStates.selectedEndUse.curtain}
            onChange={checkHandle}
          />Curtain<br/>
          <input
            name="selectedEndUse"
            value="upholstery"
            type="checkbox"
            checked={allStates.selectedEndUse.upholstery}
            onChange={checkHandle}
          />Upholstery<br/>
          <input
            name="selectedEndUse"
            value="multipurpose"
            type="checkbox"
            checked={allStates.selectedEndUse.multipurpose}
            onChange={checkHandle}
          />Multipurpose<br/>
        </div>
      </div>


      <div className="options">
        <label id="model" onClick={toggleClass}>Pattern</label>
        <div className={isToggled.model === false ? "toggle" : "toggle toggled"}><span></span><span></span></div>
        <div className={isToggled.model===false?"expands":"expands open"}>
          <input type="checkbox" name="vehicle" value="Abstract"/><span>Abstract</span><br />
          <input type="checkbox" name="vehicle" value="Floral"/><span>Floral</span><br />
          <input type="checkbox" name="vehicle" value="Classic"/><span>Classic</span>
        </div>
      </div>


      <div className="options">
        <label id="year" onClick={toggleClass}>Year</label>
        <div className={isToggled.year === false ? "toggle" : "toggle toggled"}><span></span><span></span></div>
        <div className={isToggled.year===false?"expands":"expands open"}>
          <input type="text" placeholder="Year"/>
        </div>
      </div>


      <div className="options">
        <label id="location" onClick={toggleClass}>Location</label>
        <div className={isToggled.location === false ? "toggle" : "toggle toggled"}><span></span><span></span></div>
        <div className={isToggled.location===false?"expands":"expands open"}>
          <input type="text" placeholder="Enter name or serial #"/>
        </div>
      </div>

    </section>

    <input type="submit" value="Reset"/>


  </form>

</div>
        </div>
        </div>
    );
}

export default FilterForm