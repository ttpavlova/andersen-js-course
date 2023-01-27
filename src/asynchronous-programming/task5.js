// eslint-disable-next-line import/prefer-default-export
export const getData = (array) => {
  const requests = array.map((url) => fetch(url));

  Promise.all(requests)
    .then((responses) => Promise.all(responses.map((item) => item.json())))
    .then((responses) => console.log(responses));
};
