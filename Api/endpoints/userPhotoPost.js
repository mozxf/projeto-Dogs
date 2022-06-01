export function userPhotoPost(img, name, weight, age, token) {
  const formData = new FormData();

  formData.append('img', img);
  formData.append('nome', name);
  formData.append('peso', weight);
  formData.append('idade', age);

  const options = {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + token,
    },
    body: formData,
  };

  const url = 'https://dogsapi.origamid.dev/json/api/photo';

  return { url, options };
}
