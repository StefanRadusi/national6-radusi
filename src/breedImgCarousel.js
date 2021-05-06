const dogImgHtmlRef = document.getElementById("breed-image");
const pageNumberHtmlRef = document.getElementById("page-number");

export function updateDogImg(img) {
  dogImgHtmlRef.src = img;
}

export function updatePageNumber(nr) {
  pageNumberHtmlRef.innerText = nr + 1;
}

export function goToNextImg(currentDogImg, dogImages) {
  localStorage.setItem("currentDogImg", currentDogImg);
  updatePageNumber(currentDogImg);
  updateDogImg(dogImages[currentDogImg]);
}

export function goToPreviousImg(currentDogImg, dogImages) {
  localStorage.setItem("currentDogImg", currentDogImg);
  updatePageNumber(currentDogImg);
  updateDogImg(dogImages[currentDogImg]);
}
