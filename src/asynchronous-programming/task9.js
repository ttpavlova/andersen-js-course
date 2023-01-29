const asyncBar = async () => 'Some string!';

// eslint-disable-next-line import/prefer-default-export
export const foo = async () => {
  const string = await asyncBar();
  console.log(string);
};
