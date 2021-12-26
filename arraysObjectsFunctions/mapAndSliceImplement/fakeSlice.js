Array.prototype.fakeSlice = function (begin, end) {
  const newArr = [],
    length = this.length,
    beg = Number(begin) || 0;

  let size = 0,
    start = beg >= 0 ? beg : length + beg,
    sliceTo = end ? end : length;

  if (end < 0) {
    sliceTo = length + end;
  }

  if (begin !== 0 && end !== 0) {
    size = sliceTo - start;
  }

  for (i = 0; i < size; i++) {
    newArr[i] = this[start + i];
  }

  return newArr;
};

console.log([1, 2, 3, 4, 5].fakeSlice(1, 2));
console.log([1, 2, 3, 4, 5].slice(1, 2));
