// eslint-disable-next-line import/prefer-default-export
export function getResolvedPromise(value) {
  return new Promise(function (resolve) {
    resolve(value);
  });
}
