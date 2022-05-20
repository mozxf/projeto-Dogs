const url = `https://dogsapi.origamid.dev/json/jwt-auth/v1/token`;

function tokenPost(username, password) {
  const post = { username, password };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  };

  return { url, options };
}

export { tokenPost };
