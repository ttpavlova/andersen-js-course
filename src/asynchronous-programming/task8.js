const getUsers = (url) => fetch(url);

async function foo(url) {
  try {
    const response = await getUsers(url);
    const json = await response.json();
    const [user] = json;
    console.log(user);
  } catch (err) {
    console.log('Error!', err);
  }
}

foo('https://jsonplaceholder.typicode.com/users');
// {id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz', address: {…}, …}
foo('ht://jsonplaceholder.typicode.com/users');
// Fetch API cannot load ht://jsonplaceholder.typicode.com/users. URL scheme "ht" is not supported.
