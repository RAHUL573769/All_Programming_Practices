const array = [1, "qwes", 234];

const mergedArray = [...array];
console.log(mergedArray);

const user = {
  name: "Rahul",
  roll: 134
};

const mergedObject = {
  ...user
};
console.log(mergedObject);

setTimeout(() => {
  console.log("Handle Time Out");
}, 3000);
