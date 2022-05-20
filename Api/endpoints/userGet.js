const url = `https://dogsapi.origamid.dev/json/api/user`;

function userGet(token) {
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return { url, options };
}

export { userGet };
