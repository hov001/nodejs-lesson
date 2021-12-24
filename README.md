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

[Solution](./arraysObjectsFunctions/fakeMap.js)

---

**Array.prototype.slice**

```js
console.log([1, 2, 3].fakeSlice(-1));
console.log([1, 2, 3].slice(-1));
```

[Solution](./arraysObjectsFunctions/fakeSlice.js)
