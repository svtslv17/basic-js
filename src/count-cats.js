module.exports = function countCats(arr) {
  let counter = 0;
  arr.flat(Infinity).forEach(function(item) {
    if(item=='^^'){counter++}
  });
  
  return counter;
};
