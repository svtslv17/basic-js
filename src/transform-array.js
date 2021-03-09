module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("it is not an array");
  }
  for (i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--discard-next":
        arr.splice(i, 2);
        i--;
        break;
      case "--discard-prev":
        if (i != 0) {
          arr.splice(i - 1, 2);
          i = i - 2;
        } else {
          arr.splice(i, 1);
          i--;
        }
        break;
      case "--double-next":
        if (i + 1 >= arr.length) {
          arr.splice(i, 1);
        } else {
          arr[i] = arr[i + 1];
        }
        break;
      case "--double-prev":
        if (i != 0) {
          arr[i] = arr[i - 1];
        } else {
          arr.splice(i, 1);
        }
        break;
      default:
        break;
    }
  }
  return arr;
};
