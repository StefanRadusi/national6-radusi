console.log("JavaScript - LocalStorage");

// Here will attempt the some logic as for the branch: course-21-cookies, but using local-storage
// Local-storage is similar to cookies but is easier to work with and can store more data

// checkout handleLogin to see how to set items in localStorage

if (!localStorage.getItem("name") || !localStorage.getItem("password")) {
  window.location = "/login.html";
}

document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("name");
  localStorage.removeItem("password");
  window.location = "/";
});

const breedsRefContainer = document.getElementById("breeds");
const pageNumberRef = document.getElementById("page-number");
let dogBreedImgs = [];
let index = 0;

if (localStorage.getItem("breed") && localStorage.getItem("index")) {
  const breed = localStorage.getItem("breed");
  index = Number(localStorage.getItem("index"));
  fetchDogImgs(breed, () => {
    setDogImg(index);
    setPageNumber(index);
  });
}

fetch("https://dog.ceo/api/breeds/list/all")
  .then((r) => r.json())
  .then(({ message }) => {
    for (const breed in message) {
      const breedRef = createBreed(breed);
      if (localStorage.getItem("breed") === breed) {
        setCurrentBreed(breedRef);
      }
      setShowBreedImgs(breedRef);
    }
  });

function createBreed(breeName) {
  const p = document.createElement("p");
  p.innerText = breeName;
  breedsRefContainer.appendChild(p);
  p.style.cursor = "pointer";

  return p;
}

function setShowBreedImgs(breedRef) {
  breedRef.addEventListener("click", () => {
    setCurrentBreed(breedRef);
    fetchDogImgs(breedRef.innerText, () => {
      setDogImg(0);
      setPageNumber(0);
      localStorage.setItem("index", 0);
      index = 0;
    });
    localStorage.setItem("breed", breedRef.innerText);
  });
}

function setCurrentBreed(ref) {
  document
    .querySelectorAll("#breeds p")
    .forEach((e) => (e.style.textDecoration = "none"));
  ref.style.textDecoration = "underline";
}

function fetchDogImgs(breed, callback) {
  fetch(`https://dog.ceo/api/breed/${breed}/images`)
    .then((r) => r.json())
    .then(({ message }) => {
      dogBreedImgs = message;
      if (callback) callback();
    });
}

function setDogImg(index) {
  if (dogBreedImgs[index]) {
    document.getElementById("breed-image").src = dogBreedImgs[index];
  }
}

document.getElementById("backward").addEventListener("click", () => {
  index--;
  setDogImg(index);
  setPageNumber(index);
  localStorage.setItem("index", index);
});

document.getElementById("forward").addEventListener("click", () => {
  index++;
  setDogImg(index);
  setPageNumber(index);
  localStorage.setItem("index", index);
});

function setPageNumber(page) {
  pageNumberRef.innerText = page + 1;
}
