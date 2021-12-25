Array.prototype.fakeFlat = function (depth = 1) {
  const newArr = [];
  const numberDepth = Number(depth) || 0;

  function recursiveFlat(array, initialStep) {
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i]) && initialStep > 0) {
        recursiveFlat(array[i], initialStep - 1);
      } else {
        newArr.push(array[i]);
      }
    }
  }

  recursiveFlat(this, numberDepth);

  return newArr;
};

console.log([1, [2, 3, [4]], [[5, 6], 7]].fakeFlat("a"));

console.log([1, [2, 3, [4]], [[5, 6], 7]].flat("a"));
