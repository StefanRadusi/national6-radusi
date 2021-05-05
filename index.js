const spaceshipList = ["blue-spaceship", "green-spaceship", "red-spaceship"];
class Spaceship {
  constructor(selectSpaceship) {
    this.selectSpaceship = selectSpaceship;
    this.htmlRef = this.generateHtmlObjects();
    this.x = 0;
    this.y = 0;

    this.setSelectSelf();
  }

  generateHtmlObjects = () => {
    const img = document.createElement("img");
    img.src = `${
      spaceshipList[Math.floor(Math.random() * spaceshipList.length)]
    }.png`;
    img.style.display = "block";
    img.style.height = "80px";
    img.style.margin = "20px";
    document.body.appendChild(img);
    return img;
  };

  move = (direction) => {
    switch (direction) {
      case "left":
        this.x = this.x - 5;
        break;
      case "right":
        this.x = this.x + 5;
        break;
      case "up":
        this.y = this.y - 5;
        break;
      case "down":
        this.y = this.y + 5;
        break;
      default:
        break;
    }

    this.updatePosition();
  };

  updatePosition = () => {
    this.htmlRef.style.transform = `translate(${this.x}px, ${this.y}px)`;
  };

  setSelectSelf = () => {
    this.htmlRef.addEventListener("click", () => {
      this.selectSpaceship(this);
    });
  };
}
class SpaceshipManager {
  constructor() {
    this.currentSpaceship = null;
    this.setGenerateSpaceship();
    this.setMoveCurrentSpaceship();
  }

  setGenerateSpaceship = () => {
    document
      .getElementById("generate-spaceship")
      .addEventListener("click", () => {
        this.currentSpaceship = this.generateSpaceship();
      });
  };

  setMoveCurrentSpaceship = () => {
    document.addEventListener("keydown", (event) => {
      console.log(event.key);
      const direction = this.getDirectionByKey(event.key);
      this.currentSpaceship.move(direction);
    });
  };

  getDirectionByKey(key) {
    switch (key) {
      case "ArrowDown":
        return "down";
      case "ArrowRight":
        return "right";
      case "ArrowLeft":
        return "left";
      case "ArrowUp":
        return "up";

      default:
        return null;
    }
  }

  generateSpaceship = () => {
    return new Spaceship(this.selectSpaceship);
  };

  selectSpaceship = (spaceshipReference) => {
    this.currentSpaceship = spaceshipReference;
  };
}

new SpaceshipManager();
