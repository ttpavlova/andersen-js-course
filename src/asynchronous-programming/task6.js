function getResolvedPromise(value) {
  return new Promise(function (resolve) {
    resolve(value);
  });
}

getResolvedPromise(500)
  .then((result) => {
    if (result > 300) {
      throw Error('Ошибка!');
    }
  })
  .catch((error) => console.log(error)) // Error: Ошибка!
  .finally(() => console.log('This is finally!')); // This is finally!
