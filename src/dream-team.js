module.exports = function createDreamTeam(arr) {
  let newstr = "";

  try {
    arr.forEach(function (item) {
      if (typeof item === "string") {
        newstr += item.trim()[0];
      }
    });
    return newstr.toUpperCase().split("").sort().join("");
  } catch {
    return false;
  }
};
