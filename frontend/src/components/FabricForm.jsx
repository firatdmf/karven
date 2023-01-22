import { useState } from "react";
import { useDispatch } from "react-redux";
import { createFabric } from "../features/fabrics/fabricSlice";
import axios from "axios";

function FabricForm() {
  //initializing the parameters with the react states (A react state is a built-in React object that is used to contain data or information about the component)
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [sku, setSku] = useState("");
  const [price, setPrice] = useState("");
  const [verticalRepeat, setVerticalRepeat] = useState("");
  const [horizontalRepeat, setHorizontalRepeat] = useState("");
  const [collectionName, setCollectionName] = useState("");
  const [type, setType] = useState("");
  const [origin, setOrigin] = useState("");
  const [finish, setFinish] = useState("");
  const [railRoaded, setRailRoaded] = useState(false);
  const [generalDelivery, setGeneralDelivery] = useState("");
  const [composition, setComposition] = useState("");
  // const [performanceActSymbols, setPerformanceActSymbols] = useState("");
  const [abrasionTest, setAbrasionTest] = useState("");
  const [pattern, setPattern] = useState("");
  const [endUse, setEndUse] = useState("");
  const [cleaningCode, setCleaningCode] = useState("");
  const [width, setWidth] = useState("");
  const [imageFile, setImageFile] = useState("");
  const [imageFileName, setImageFileName] = useState("");

  //just creating a shortcut word for useDispatch. useDispatch is what saves and processes the data
  const dispatch = useDispatch();

  const onImageFileChange = function (e) {
    setImageFile(e.target.files[0]);
    setImageFileName(e.target.files[0].name);
  };

  //when the form is submitted perform the below function
  const onSubmit = async (e) => {
    e.preventDefault();
    // if (imageFileName === "") {
    //   alert("please add an imagefile");
    // }
    const formData = new FormData();
    formData.append("imageFile", imageFile);

    try {
      const res = await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        
      });
      //The below is to check if it gets the right file
      // const { fileName, filePath } = res.data;
      console.log(res.data);
      dispatch(
        createFabric({
          name,
          brand,
          sku,
          price,
          width,
          verticalRepeat,
          horizontalRepeat,
          collectionName,
          type,
          origin,
          finish,
          railRoaded,
          generalDelivery,
          composition,
          abrasionTest,
          pattern,
          endUse,
          cleaningCode,
          imageFileName,
        })
      );

      setName("");
      setBrand("");
      setSku("");
      setPrice("");
      setWidth("");
      setVerticalRepeat("");
      setHorizontalRepeat("");
      setCollectionName("");
      setType("");
      setOrigin("");
      setFinish("");
      setRailRoaded("");
      setGeneralDelivery("");
      setComposition("");
      setAbrasionTest("");
      setPattern("");
      setEndUse("");
      setCleaningCode("");
      setImageFile("");
      setImageFileName("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor="brand">Brand</label>
          <input
            type="text"
            name="brand"
            id="brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
          <br />
          <label htmlFor="sku">SKU</label>
          <input
            type="text"
            name="sku"
            id="sku"
            value={sku}
            onChange={(e) => setSku(e.target.value)}
          />
          <br />
          <label htmlFor="price">Fabric Price</label>
          <input
            type="number"
            name="price"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />
          <label htmlFor="width">Fabric Width</label>
          <input
            type="number"
            name="width"
            id="width"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
          <br />

          <label htmlFor="verticalRepeat">Vertical Repeat</label>
          <input
            type="number"
            name="verticalRepeat"
            id="verticalRepeat"
            value={verticalRepeat}
            onChange={(e) => setVerticalRepeat(e.target.value)}
          />
          <br />

          <label htmlFor="horizontalRepeat">Horizontal Repeat</label>
          <input
            type="number"
            name="horizontalRepeat"
            id="horizontalRepeat"
            value={horizontalRepeat}
            onChange={(e) => setHorizontalRepeat(e.target.value)}
          />
          <br />

          <label htmlFor="collectionName">Collection Name</label>
          <input
            type="text"
            name="collectionName"
            id="collectionName"
            value={collectionName}
            onChange={(e) => setCollectionName(e.target.value)}
          />
          <br />

          <label htmlFor="type">Type</label>
          <input
            type="text"
            name="type"
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
          <br />

          <label htmlFor="origin">Country of Manufacture</label>
          <input
            type="text"
            name="origin"
            id="origin"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
          />
          <br />

          <label htmlFor="finish">Finish</label>
          <input
            type="text"
            name="finish"
            id="finish"
            value={finish}
            onChange={(e) => setFinish(e.target.value)}
          />
          <br />
          <label htmlFor="railRoaded">Is this fabric railroaded?</label>
          <input
            type="checkbox"
            id="raidRoaded"
            value={railRoaded}
            onChange={(e) => setRailRoaded(!railRoaded)}
          />

          <br />
          {/* change the below appropriately */}
          <label htmlFor="generalDelivery">
            General Delivery If Not In Stock
          </label>
          <input
            type="text"
            name="generalDelivery"
            id="generalDelivery"
            value={generalDelivery}
            onChange={(e) => setGeneralDelivery(e.target.value)}
          />
          <br />

          <label htmlFor="composition">Composition</label>
          <input
            type="text"
            name="composition"
            id="composition"
            value={composition}
            onChange={(e) => setComposition(e.target.value)}
          />
          <br />

          <label htmlFor="abrasionTest">Abrasion Test</label>
          <input
            type="number"
            name="abrasionTest"
            id="abrasionTest"
            value={abrasionTest}
            onChange={(e) => setAbrasionTest(e.target.value)}
          />
          <br />

          {/* Later change this to the wayfair or amazon specs */}
          <label htmlFor="pattern">Pattern</label>
          <input
            type="text"
            name="pattern"
            id="pattern"
            value={pattern}
            onChange={(e) => setPattern(e.target.value)}
          />
          <br />

          <label>
            End Use
            <select
              id="endUse"
              value={endUse}
              onChange={(e) => setEndUse(e.target.value)}
            >
              <option value="---">---</option>
              <option value="drapery">Drapery</option>
              <option value="upholstery">Upholstery</option>
              <option value="multipurpose">Multipurpose</option>
            </select>
          </label>

          <label>
            Cleaning Code
            <select
              id="cleaningCode"
              value={cleaningCode}
              onChange={(e) => setCleaningCode(e.target.value)}
            >
              <option value="---">---</option>
              <option value="W">W</option>
              <option value="S">S</option>
              <option value="W/S">W/S</option>
              <option value="X">X</option>
            </select>
          </label>

          <br />
          {/* Below is for image */}
          <label htmlFor="imageFile">Please upload your image below</label>
          <br />
          <input type="file" id="imageFile" onChange={onImageFileChange} />
        </div>
        <div className="">
          <button className="" type="submit">
            Add Fabric
          </button>
        </div>
      </form>
    </section>
  );
}

export default FabricForm;
