import './styles/main.css';
import { foo, createCb } from './asynchronous-programming/task1';
import { parseJSON, successCb, failureCb } from './asynchronous-programming/task2';
import { delay } from './asynchronous-programming/task3';
import { getDataTask4 } from './asynchronous-programming/task4';
import { getData } from './asynchronous-programming/task5';
import { getResolvedPromise } from './asynchronous-programming/task6';
import { foo as fooTask7 } from './asynchronous-programming/task7';
import { foo as fooTask8 } from './asynchronous-programming/task8';

foo(5, createCb('cb')); // x <= 10
foo(20, createCb('cb')); // x > 10 // cb

console.log('=============');

parseJSON('{"x": 10}', successCb, failureCb); // Success parse! // {x: 10}
parseJSON('{x}', successCb, failureCb); // Failure parse!
// SyntaxError: Expected property name or '}' in JSON at...

console.log('=============');

delay(1000).then((value) => console.log('Done with ' + value)); // Done with 100

console.log('=============');

// const url = 'https://json-generator.com/api/json/get/cfQCylRjuG'; // cors ?
// using https://jsonplaceholder.typicode.com/
const url2 = 'https://jsonplaceholder.typicode.com/todos/11';

getDataTask4(url2); // vero rerum temporibus dolor

console.log('=============');

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

console.log('=============');

getResolvedPromise(500)
  .then((result) => {
    if (result > 300) {
      throw Error('Ошибка!');
    }
  })
  .catch((error) => console.log(error)) // Error: Ошибка!
  .finally(() => console.log('This is finally!')); // This is finally!

console.log('=============');

fooTask7(); // 20

console.log('=============');

fooTask8('https://jsonplaceholder.typicode.com/users');
// {id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz', address: {…}, …}
fooTask8('ht://jsonplaceholder.typicode.com/users');
// Fetch API cannot load ht://jsonplaceholder.typicode.com/users. URL scheme "ht" is not supported.
