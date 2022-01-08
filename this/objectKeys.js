const obj = {
  name: "Jhon",
  country: {
    name: "Armenia",
    code: 374,
  },
};

const reverse = (initialObject = {}) => {
  if (typeof initialObject !== "object" || Number.isNaN(initialObject)) {
    return new Error("Your parameter is not valid!!!");
  }

  const reversedObject = {};

  for (let key in initialObject) {
    const value = initialObject[key];
    if (typeof value === "object" && !Number.isNaN(value)) {
      reversedObject[key] = reverse(value);
    } else {
      reversedObject[value] = key;
    }
  }

  return reversedObject;
};

const reverseObj = reverse(obj);
const reverseObjFunc = reverse(() => console.log("Hovo"));

console.log(reverseObj);
console.log(reverseObjFunc);
console.log(obj);
/*
  reverseObj = {
    Jhon: "name",
    country: {
      Armenia: "name",
     374: "code"
   }
  }
  */
