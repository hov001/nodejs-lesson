# Arrays, Objects, Functions

## JS: Task 1. Implement map and slice functions

Write map and slice functions that work like Array.map and Array.slice functions.

**Array.prototype.map**

```js
console.log(
  [1, 2, 3].fakeMap(
    function (el) {
      return el * 2;
    },
    [2, 4, 5, 6]
  )
);

console.log(
  [1, 2, 3].map(
    function (el) {
      return el * 2;
    },
    [2, 4, 5, 6]
  )
);
```

[Solution](./arraysObjectsFunctions/mapAndSliceImplement/fakeMap.js)

---

**Array.prototype.slice**

```js
console.log([1, 2, 3].fakeSlice(-1));
console.log([1, 2, 3].slice(-1));
```

[Solution](./arraysObjectsFunctions/mapAndSliceImplement/fakeSlice.js)

## JS: Task 2. Flatten an array

Write a program to flatten an array.

**Note**: Don't use Array.flat function

```js
const array = [1, [2, 3, [4]], [[5, 6], 7]];
const flatArray = [1, 2, 3, 4, 5, 6, 7];
```

[Solution](./arraysObjectsFunctions/flatImplementation/fakeFlat.js)

---
