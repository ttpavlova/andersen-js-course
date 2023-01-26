import './styles/main.css';
import { foo, createCb } from './asynchronous-programming/task1';
import { parseJSON, successCb, failureCb } from './asynchronous-programming/task2';

foo(5, createCb('cb')); // x <= 10
foo(20, createCb('cb')); // x > 10 // cb

console.log('=============');

parseJSON('{"x": 10}', successCb, failureCb); // Success parse! // {x: 10}
parseJSON('{x}', successCb, failureCb); // Failure parse!
// SyntaxError: Expected property name or '}' in JSON at...

console.log('=============');
