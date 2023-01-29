const getDataTask4 = function (url) {
  return fetch(url)
    .then((response) => response.json())
    .then((response) => response.completed && console.log(response.title));
};

// const url = 'https://json-generator.com/api/json/get/cfQCylRjuG'; // cors ?
const url2 = 'https://jsonplaceholder.typicode.com/todos/11';

getDataTask4(url2); // vero rerum temporibus dolor
