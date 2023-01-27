// eslint-disable-next-line import/prefer-default-export
export const getDataTask4 = function (url) {
  return fetch(url)
    .then((response) => response.json())
    .then((response) => response.completed && console.log(response.title));
};
