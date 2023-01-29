const asyncBar = async () => 'Some string!';

const foo = async () => {
  const string = await asyncBar();
  console.log(string);
};

foo(); // Some string!
