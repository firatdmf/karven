const testFolder = "../frontend/public/CurtainFabricCodesPics";
const fs = require("fs");
// product card needs:
// sku, variants, imgUrls (depending on the variant)
let trial = ["1379_G78-3.jpg", "1370-5.jpg", "1354.jpg", "1354_G64.jpg"];
let products = [];
// 12K201
// 1002
// 1089T
// 1128_K23
// 1193_K21-2
// 1205-2
// 1360_Kartela
// 8015_Kartela-2
// 24402i_G112
// Manolya_1011
// Softa_Krem
// Turuva_Paris
// AP12001

let breakitdown = (fileName) => {
  let object = {};
  if (fileName.includes("_") && fileName.includes("-")) {
    let design = fileName.split("_")[0];
    let incili = design.slice(-1);
    if (design.slice(-1) === "i") {
      ekleme = "incili";
    } else if (design.slice(-1) === "T") {
      ekleme = "tasli";
    } else {
      ekleme = "";
    }
    let variantName = fileName.substring(
      fileName.indexOf("_") + 1,
      fileName.lastIndexOf("-")
    );
    let imageNo = fileName.substring(
      fileName.indexOf("-") + 1,
      fileName.lastIndexOf(".")
    );
    console.log(
      design +
        " | " +
        ekleme +
        " |" +
        " variant name: " +
        variantName +
        ", " +
        "image no: " +
        imageNo
    );
    object.design = design;
    // return console.log(fileName + ": yes");
  } else if (fileName.includes("_")) {
    let design = fileName.split("_")[0];
    let variantName = fileName.substring(
      fileName.indexOf("_") + 1,
      fileName.indexOf(".")
    );
    console.log(
      design +
        " | " +
        "variant name: " +
        variantName +
        ", " +
        "image no: " +
        "N/A"
    );
  } else if (fileName.includes("-")) {
    let design = fileName.split("-")[0];
    let imageNo = fileName.substring(
      fileName.indexOf("-") + 1,
      fileName.indexOf(".")
    );
    console.log(
      design + " | " + "variant name: " + "N/A" + ", " + "image no: " + imageNo
    );
  } else {
    let design = fileName.split(".")[0];

    console.log(design + " | no variant or additional image");
  }
  // products.push(object);
};

// trial.map((fileName, index) => {
fs.readdirSync(testFolder).forEach((fileName, index) => {
  breakitdown(fileName);
});
// console.log(products);

// let getVariant = (fileName) => {
//   if(fileName.includes("_")){
//     let variantName =
//   }
//   return fileName.substring(
//     fileName.indexOf("_") + 1,
//     fileName.lastIndexOf(".")
//   );
// };

// fs.readdirSync(testFolder).map((fileName, index) => {
//   console.log(getVariant(fileName));
// });

const jpeg_to_jpg = () => {
  fs.readdirSync(testFolder).forEach((fileName, index) => {
    //   if (index < 5) {

    //   console.log(fileName + ' type: ' + typeof(fileName));
    //   if (fileName.includes("-") || fileName.includes("_"));
    let originalPath = testFolder + "/" + fileName;
    let file_actual_name = fileName.split(".")[0];
    let originalExtension = fileName.split(".")[1];
    if (originalExtension === "jpeg") {
      let newFileName = file_actual_name + ".jpg";
      let newPath = testFolder + "/" + newFileName;
      fs.rename(originalPath, newPath, (error) => {
        if (error) {
          console.log(error);
        } else {
          console.log("\nFile Renamed!\n");
        }
      });
    }
  });
};

// The second is synchronous, it will return the file name array, but it will stop any further execution of your code until the read process ends.
