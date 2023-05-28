let fabrics = require('./fabrics.json');

console.log(typeof(fabrics));

//iterating through an object

// for (const [key,value] of Object.entries(fabrics)){
//     // console.log(value.sku);
//     if(typeof(value.sku) === 'string'){
//         console.log(`${key}: ${value.sku}`)
//     }
// }


// for (const [key,fabric] of Object.entries(fabrics)){
//     fabric.sku 
// }

// console.log(fabrics);
let x = Object.entries(fabrics).filter((fabric) => fabric[1].fabric[0]==="sheer" && fabric[1].patternType==='embroidery')
console.log(x);
