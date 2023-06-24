const testFolder = "../frontend/public/CurtainFabricCodesPics";
const fs = require("fs");

let productsOld = [
  "12K201.jpg",
  "1002.jpg",
  "1089T.jpg",
  "1128_K23.jpg",
  "1193_K21-2.jpg",
  "1205-2.jpg",
  "1360_Kartela.jpg",
  "8015_Kartela-2.jpg",
  "8015_Kartela-3.jpg",
  "24402i_G112.jpg",
  "24402i_G112-2.jpg",
  "24402i_G113.jpg",
  "24402i_G113-2.jpg",
  "24402i_G113-3.jpg",
  "Manolya_1011.jpg",
  "Manolya_1013.jpg",
  "Sofya_Krem.jpg",
  "Turuva_Paris.jpg",
  "AP12001.jpg",
];

let isLetter = (str) => {
  return str.length === 1 && str.match(/[a-z]/i);
};

let classifyImage = (fileName, products) => {
  let object = {};
  let annex;
  let design = fileName.split(".jpg")[0];
  let variant;
  let imageNo;
  if (fileName.includes("-")) {
    // imageNo.push(design.split("-")[1]);
    imageNo = design.split("-")[1];
    design = design.split("-")[0];
  } else {
    // imageNo.push("1");
    imageNo = "1";
  }

  if (design.includes("_")) {
    // variant.push(design.split("_")[1]);
    variant = design.split("_")[1];
    design = design.split("_")[0];
  } else {
    variant = "";
  }

  let secondLastCharacter = design.charAt(design.length - 2);
  if (!isLetter(secondLastCharacter) && isLetter(design.slice(-1))) {
    annex = design.slice(-1);
    design = fileName.split(annex)[0];
  } else {
    annex = "";
  }

  const i = products.findIndex((e) => e.design === design);
  let exists = false;
  if (i > -1) {
    exists = true;
    //   if (!products[i].variant.includes(variant[0])) {
    //     products[i].variant.push(variant[0]);
    //     // products[i].variant = variant[0];
    //   }
    //   if (!products[i].imageNo.includes(imageNo[0])) {
    //     products[i].imageNo.push(imageNo[0]);
    //     // products[i].imageNo = imageNo[0];
    //   }
  }
  // else {
  object.name = fileName;
  object.design = design;
  object.annex = annex;
  object.variant = variant;
  object.imageNo = imageNo;
  // return console.log(string);
  // }
  //   console.log(JSON.stringify(object) + " / " + exists);
  return [object, exists];
};

//TRYING OUT FIRST
let classifyEachFile = (productFiles) => {
  let products = [];
  productFiles.map((item, index) => {
    // if (index < 30) {
    let [object, exists] = classifyImage(item, products);
    // if (exists === false) {
    products.push(object);
    // } else {
    // }
    // }
  });
  // console.table(products);
  return products;
};

let removeDuplicates = (array) => {
  return array.filter((item, index) => array.indexOf(item) == index);
};
let getKeyByValue = (object, value) => {
  return Object.keys(object).find((key) => object[key] === value);
};

let uniqueDesignsObject = (products) => {
  let uniqueArray = [];
  products.map((item) => {
    uniqueArray.push(item.design);
  });
  uniqueArray = removeDuplicates(uniqueArray);
  uniqueArray.forEach((item, index) => {
    uniqueArray[index] = { design: item, files: [], length:300 };
  });
  // console.table(uniqueArray);
  return uniqueArray;
};

let objectAppend = (products, uniqueDesignObject) => {
  products.forEach((item, index) => {
    uniqueDesignObject.forEach((item2, index2) => {
      if (item.design === item2.design) {
        item2.files.push(item);
      }
    });
  });
};

let writeJSON = (arrayOfObjectData) => {
  fs.writeFile(
    "../frontend/src/products.json",
    JSON.stringify(arrayOfObjectData, null, 4),
    (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("File has been created");
    }
  );
};

let node = () => {
  let productFiles = fs.readdirSync(testFolder).map((fileName, index) => {
    return fileName;
  });
  let products = classifyEachFile(productFiles);
  console.table(products);
  let uniqueArray = uniqueDesignsObject(products);
  console.table(uniqueArray);
  objectAppend(products, uniqueArray);
  console.table(uniqueArray);
  console.log(uniqueArray[4]);
  writeJSON(uniqueArray);
};

node();

// below is for creating a file of json with your data
