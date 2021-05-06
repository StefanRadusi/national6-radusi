export function renderBreeds(breeds, currentBreed, callback) {
  console.log(breeds);
  for (const breed of breeds) {
    generateBreedButton(breed, currentBreed, callback);
  }
}

function generateBreedButton(breed, currentBreed, callback) {
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
    callback(breed);
  });
}
