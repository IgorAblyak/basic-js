const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) {
    return false;
  }

  let codeNames = [];
  for (let name of members) {
    if (typeof name !== "string" || !name || /^\s+$/.test(name)) {
      continue;
    }
    let handlename = name.replace(/\s/g,"").toUpperCase();
    codeNames.push(handlename[0]);
  }

  return codeNames.sort().join('');
};
