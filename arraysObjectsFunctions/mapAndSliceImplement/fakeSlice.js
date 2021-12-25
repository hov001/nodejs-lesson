Array.prototype.fakeSlice = function (begin = 0, end) {
  const newArr = [],
    length = this.length,
    beg = Number(begin) || 0;

  let size,
    start = beg >= 0 ? beg : length + beg,
    sliceTo = end ? end : length;

  if (end < 0) {
    sliceTo = length + end;
  }

  size = sliceTo - start;

  for (i = 0; i < size; i++) {
    newArr[i] = this[start + i];
  }

  return newArr;
};

console.log([1, 2, 3].fakeSlice(-1));
console.log([1, 2, 3].slice(-1));
