function fetchData(callback) {
  setTimeout(function () {
    let data = "hello world!";
    callback(data);
  }, 2000);
}

function Hello(data) {
  console.log(data);
}
// const data="hi"
const result = fetchData(Hello);

function fetchDataServer() {
  const dataFetch = new Promise((resolve, reject) => {
    const data = { name: "Rahul", age: 25 };
    const error = "Sorry data not found";
    reject(error);
  });

  return dataFetch;
}

fetchDataServer()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

const numbers = [1, 2, 3, 4];
let findNumbers = numbers.find((num) => num > 2);
console.log(findNumbers);

const personArray = [
  { name: "Ram", age: 25 },
  { name: "shyam", age: 30 },
];
