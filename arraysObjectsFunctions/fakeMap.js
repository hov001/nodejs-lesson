Array.prototype.fakeMap = function (callback, thisArg) {
  const initialThis = thisArg || this;
  const newArr = [];

  for (let i = 0; i < this.length; i++) {
    newArr.push(callback.apply(initialThis, [this[i], i, this]));
  }

  return newArr;
};

console.log(
  [1, 2, 3].fakeMap(
    function (el) {
      console.log("this::", this);
      return el * 2;
    },
    [2, 4, 5, 6]
  )
);

console.log(
  [1, 2, 3].map(
    function (el) {
      console.log("this::", this);
      return el * 2;
    },
    [2, 4, 5, 6]
  )
);
