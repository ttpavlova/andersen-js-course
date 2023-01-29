const getData = (array) => {
  const requests = array.map((url) => fetch(url));

  Promise.all(requests)
    .then((responses) => Promise.all(responses.map((item) => item.json())))
    .then((responses) => console.log(responses));
};

// const arrayOfUrls = [
//   'https://json-generator.com/api/json/get/cevhxOsZnS',
//   'https://json-generator.com/api/json/get/cguaPsRxAi',
//   'https://json-generator.com/api/json/get/cfDZdmxnDm',
//   'https://json-generator.com/api/json/get/cfkrfOjrfS',
//   'https://json-generator.com/api/json/get/ceQMMKpidK',  // cors ?
// ];

const arrayOfUrls2 = [
  'https://jsonplaceholder.typicode.com/todos/11',
  'https://jsonplaceholder.typicode.com/todos/12',
  'https://jsonplaceholder.typicode.com/todos/13',
  'https://jsonplaceholder.typicode.com/todos/14',
  'https://jsonplaceholder.typicode.com/todos/15',
];

getData(arrayOfUrls2); // logs an array of items
