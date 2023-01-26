export const createCb = (str) =>
  function () {
    console.log(str);
  };

export const foo = (x, cb) => {
  if (x > 10) {
    console.log('x > 10');
    cb();
  } else {
    console.log('x <= 10');
  }
};
