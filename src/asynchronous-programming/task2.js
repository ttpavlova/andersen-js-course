const parseJSON = (jsonStr, successCb, failureCb) => {
  try {
    const obj = JSON.parse(jsonStr);
    successCb(obj);
  } catch (e) {
    failureCb(e);
  }
};

const successCb = (result) => {
  console.log('Success parse!');
  console.log(result);
};

const failureCb = (error) => {
  console.log('Failure parse!');
  console.log(error);
};

parseJSON('{"x": 10}', successCb, failureCb); // Success parse! // {x: 10}
parseJSON('{x}', successCb, failureCb); // Failure parse!
// SyntaxError: Expected property name or '}' in JSON at...
