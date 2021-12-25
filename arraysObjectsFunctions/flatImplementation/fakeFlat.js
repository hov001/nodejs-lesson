Array.prototype.fakeFlat = function (depth = 1) {
  const newArr = [];

  function recursiveFlat(array, initialStep) {
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i]) && initialStep > 0) {
        return recursiveFlat(array[i], initialStep - 1);
      }

      newArr.push(array[i]);
    }

    return null;
  }

  recursiveFlat(this, depth);

  return newArr;
};

console.log([1, 2, 3, [6, 7, [10, 11, [12]]]].fakeFlat(Infinity));

console.log([1, 2, 3, [6, 7, [10, 11, [12]]]].flat(Infinity));
