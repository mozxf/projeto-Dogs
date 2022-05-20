const url = `https://dogsapi.origamid.dev/json/api/user`;

function userPost(username, email, password) {
  const post = {
    username: username.value,
    email: email.value,
    password: password.value,
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  };
  return { url, options };
}

export { userPost };
