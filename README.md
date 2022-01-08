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

# This

## JS: Task 1. Implement map and slice functions

Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys. (objects have string, number values or another object with string and number values).

> Note: Values are unique.

```js
const obj = {
  name: "Jhon",
  country: {
    name: "Armenia",
    code: 374,
  },
};

const reverseObj = reverse(obj);

/*
  reverseObj = {
    Jhon: "name",
    country: {
      Armenia: "name",
      374: "code"
    }
  }
*/
```

[Solution](./this/objectKeys.js)

---
