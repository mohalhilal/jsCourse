let object = { name: "Hilal", age: 20 };

for (const key in object) {
  if (Object.hasOwnProperty.call(object, key)) {
    const element = object[key];
    console.log(element);
  }
}
