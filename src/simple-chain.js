const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (typeof value === "undefined") {
      this.chain.push("( )");
    } else {
      this.chain.push("( " + String(value) + " )");
    }
    return this;
  },
  removeLink(position) {
    if (
      !Number.isInteger(position) |
      ((position < 1) | (position > this.chain.length))
    ) {
      this.chain = [];
      throw new Error("Incorrect position");
    }

    for (i = 1; i < this.chain.length + 1; i++) {
      if (i == position) {
        this.chain.splice(i - 1, 1);
      }
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    for (i = 0; i < this.chain.length; i++) {
      if (!(i == 0)) {
        this.chain[i] = `~~${this.chain[i]}`;
      }
    }
    let final = this.chain.join("");
    this.chain = [];
    return final;
  },
};
module.exports = chainMaker;
