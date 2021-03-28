const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const decision = {}; 
  const turn = (2 ** disksNumber) -1;
  const second = Math.floor((turn * 3600) / turnsSpeed);
  decision["turns"] = turn;
  decision["seconds"] = second;
  return decision;
};
