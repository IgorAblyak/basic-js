const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error;
  } else if (!arr) {
    return false;
  }

  const transformArray = []; 

    arr.map((item, i, arr) => {
      if (item === '--double-next') {
        arr.splice(i,1,arr[i+1]);
        if (typeof arr[i] !== "string") {
          transformArray.push(arr[i]);
        }
      } else if (item === '--double-prev') {
        arr.splice(i,1,arr[i-1]);
        if (typeof arr[i] !== "string") {
          transformArray.push(arr[i]);
        }
      } else if (item === '--discard-next' && arr[i+1] ) {
        arr.splice(i,2);
        if (typeof arr[i] !== "string") {
          transformArray.push(arr[i]);
        }
      } else if (item === '--discard-prev' && arr[i-1] ) {
        arr.splice(i-1,2);
        if (typeof arr[i-1] !== "string") {
          transformArray.push(arr[i-1]);
        } 
      } else if (item === '--discard-next' && !arr[i+1] || item === '--double-next' && !arr[i+1]) {
        arr.splice(i,1);
      } else if (item === '--discard-prev' && !arr[i-1] || item === '--double-prev' && !arr[i-1]) {
        arr.splice(i,1);
      } else {
        transformArray.push(arr[i]);
      }
    })
    return transformArray;
};
