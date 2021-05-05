console.log("JavaScript - Dogs App");

if (!localStorage.getItem("name") || !localStorage.getItem("password")) {
  window.location = "/login.html";
}

document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("name");
  localStorage.removeItem("password");
  window.location = "/";
});

// HOMEWORK SOLUTION

const dogImgHtmlRef = document.getElementById("breed-image");
const pageNumberHtmlRef = document.getElementById("page-number");
let currentBreed = localStorage.getItem("currentBreed");
let currentDogImg = localStorage.getItem("currentDogImg") || 0;
let dogImages = [];

if (currentBreed) {
  getBreedImgs(currentBreed);
}

fetch("https://dog.ceo/api/breeds/list/all")
  .then((r) => r.json())
  .then((json) => {
    renderBreeds(Object.keys(json.message));
  });

document.getElementById("backward").addEventListener("click", () => {
  goToPreviousImg();
});

document.getElementById("forward").addEventListener("click", () => {
  goToNextImg();
});

function generateBreedButton(breed) {
  const p = document.createElement("p");
  p.classList.add("breed-button");
  p.innerText = breed;
  document.getElementById("breeds").appendChild(p);

  if (breed === currentBreed) {
    p.classList.add("breed-button-selected");
  }

  p.addEventListener("click", () => {
    const currentSelectedButton = document.querySelector(
      ".breed-button-selected"
    );
    if (currentSelectedButton)
      currentSelectedButton.classList.remove("breed-button-selected");

    p.classList.add("breed-button-selected");

    localStorage.setItem("currentBreed", breed);
    currentDogImg = 0;
    updatePageNumber(currentDogImg);
    getBreedImgs(breed);
  });
}

function renderBreeds(breeds) {
  console.log(breeds);
  for (const breed of breeds) {
    generateBreedButton(breed);
  }
}

function updateDogImg(img) {
  dogImgHtmlRef.src = img;
}

function updatePageNumber(nr) {
  pageNumberHtmlRef.innerText = nr + 1;
}

function getBreedImgs(breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images`)
    .then((r) => r.json())
    .then((json) => {
      console.log(json);
      dogImages = json.message;
      updateDogImg(dogImages[currentDogImg]);
    });
}

function goToNextImg() {
  if (currentDogImg + 1 <= dogImages.length - 1) {
    currentDogImg++;
    localStorage.setItem("currentDogImg", currentDogImg);
    updatePageNumber(currentDogImg);
    updateDogImg(dogImages[currentDogImg]);
  }
}

function goToPreviousImg() {
  if (currentDogImg - 1 >= 0) {
    currentDogImg--;
    localStorage.setItem("currentDogImg", currentDogImg);
    updatePageNumber(currentDogImg);
    updateDogImg(dogImages[currentDogImg]);
  }
}
