const createCb = (str) =>
  function () {
    console.log(str);
  };

const foo = (x, cb) => {
  if (x > 10) {
    console.log('x > 10');
    cb();
  } else {
    console.log('x <= 10');
  }
};

foo(5, createCb('cb')); // x <= 10
foo(20, createCb('cb')); // x > 10 // cb
