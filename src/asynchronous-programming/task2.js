export const parseJSON = (jsonStr, successCb, failureCb) => {
  try {
    const obj = JSON.parse(jsonStr);
    successCb(obj);
  } catch (e) {
    failureCb(e);
  }
};

export const successCb = (result) => {
  console.log('Success parse!');
  console.log(result);
};

export const failureCb = (error) => {
  console.log('Failure parse!');
  console.log(error);
};
