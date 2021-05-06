export function getBreeds(callback) {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((r) => r.json())
    .then((json) => {
      callback(Object.keys(json.message));
    });
}

export function getImgsByBreed(breed, callback) {
  fetch(`https://dog.ceo/api/breed/${breed}/images`)
    .then((r) => r.json())
    .then((json) => {
      callback(json.message);
    });
}
