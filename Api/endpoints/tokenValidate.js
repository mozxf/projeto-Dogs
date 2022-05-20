const url = 'https://dogsapi.origamid.dev/json/jwt-auth/v1/token/validate';

function validateToken(token) {
  const options = {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };

  return { url, options };
}

export { validateToken };
