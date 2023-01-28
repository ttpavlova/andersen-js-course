const getUsers = (url) => fetch(url);

// eslint-disable-next-line import/prefer-default-export
export async function foo(url) {
  try {
    const response = await getUsers(url);
    const json = await response.json();
    const [user] = json;
    console.log(user);
  } catch (err) {
    console.log('Error!', err);
  }
}
