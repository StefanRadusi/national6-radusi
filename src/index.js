console.log("JavaScript - Dogs App");

import { getImgsByBreed, getBreeds } from "./api";
import { renderBreeds } from "./breedList";
import { setAuthentication } from "./authentication";
import {
  updateDogImg,
  updatePageNumber,
  goToPreviousImg,
  goToNextImg,
} from "./breedImgCarousel";

// HOMEWORK SOLUTION

setAuthentication();

let currentBreed = localStorage.getItem("currentBreed");
let currentDogImg = Number(localStorage.getItem("currentDogImg")) || 0;
let dogImages = [];

if (currentBreed) {
  getImgsByBreed(currentBreed, (imgs) => {
    dogImages = imgs;
    updatePageNumber(currentDogImg);
    updateDogImg(dogImages[currentDogImg]);
  });
}

getBreeds((breeds) => {
  renderBreeds(breeds, currentBreed, (breed) => {
    currentDogImg = 0;
    getImgsByBreed(breed, (imgs) => {
      dogImages = imgs;
      updatePageNumber(currentDogImg);
      updateDogImg(dogImages[currentDogImg]);
    });
  });
});

document.getElementById("backward").addEventListener("click", () => {
  if (currentDogImg - 1 >= 0) {
    currentDogImg--;
    goToPreviousImg(currentDogImg, dogImages);
  }
});

document.getElementById("forward").addEventListener("click", () => {
  if (currentDogImg + 1 <= dogImages.length - 1) {
    currentDogImg++;
    goToNextImg(currentDogImg, dogImages);
  }
});
