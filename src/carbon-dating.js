const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const RATE_CONSTANT = 0.693 / HALF_LIFE_PERIOD;

  if (+sampleActivity <= 0 || +sampleActivity >= MODERN_ACTIVITY || isNaN(sampleActivity) || typeof sampleActivity !== "string" || !sampleActivity || /^\s+$/.test(sampleActivity)) {
    return false;
  }

  let year = Math.ceil (Math.log(MODERN_ACTIVITY / sampleActivity) / RATE_CONSTANT);
  return year;
};
