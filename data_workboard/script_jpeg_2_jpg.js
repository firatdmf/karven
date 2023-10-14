const testFolder = "../frontend/public/CurtainFabricCodesPics";
const fs = require("fs");

const jpeg_to_jpg = () => {
  fs.readdirSync(testFolder).forEach((fileName, index) => {
    //   if (index < 5) {

    //   console.log(fileName + ' type: ' + typeof(fileName));
    //   if (fileName.includes("-") || fileName.includes("_"));
    let originalPath = testFolder + "/" + fileName;
    let file_actual_name = fileName.split(".")[0];
    let originalExtension = fileName.split(".")[1];
    if (originalExtension !== "jpg") {
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

jpeg_to_jpg();

// The second is synchronous, it will return the file name array, but it will stop any further execution of your code until the read process ends.
