const CustomError = require("../extensions/custom-error");

const chainMaker = {
  array: [], 
  getLength: function() {
    this.array.push(this.array.length);
  },
  addLink: function(value) {
    if(arguments.length === 0) {
      value = "( )";
    } else if(typeof value !== "string") {
      value = String(value);
    }
    this.array.push(`(${value})`);
    return this;
  },
  removeLink: function(position) {
    if (isNaN(position) || !Number.isInteger(position) || position > this.array.length || position <= 0) {
      this.array.length = 0;
      throw new Error;
    }
    this.array.splice(this.array[position-1],1);
    return this;
  },
  reverseChain: function() {
    this.array.reverse();
    return this;
  },
  finishChain() {
    this.array.join("~~");
    this.array.length = 0;
  }
};

module.exports = chainMaker;
