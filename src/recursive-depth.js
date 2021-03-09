module.exports = class DepthCalculator {
  calculateDepth(array) {
    return JSON.stringify(array) === JSON.stringify(array.flat(Infinity))
      ? 1
      : 1 + this.calculateDepth(array.flat());
  }
};
