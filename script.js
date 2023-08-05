let numOfSidesInput = document.querySelector("#numOfSides"); // number of sides
let sOIA = document.querySelector("#sOIA"); // sum of interior angles
let iA = document.querySelector("#iA"); // interior angle
let eA = document.querySelector("#eA"); // exterior angle
let polygonName = document.querySelector("#polygonName"); // polygon name

let polygonNames = {
  3: "Triangle",
  4: "Square",
  5: "Pentagon",
  6: "Hexagon",
  7: "Heptagon",
  8: "Octagon",
  9: "Nonagon",
  10: "Decagon",
  11: "Undecagon",
  12: "Duodecagon",
};

// rounds value to specified dp(note im not using `toFixed()` because i don't wanna append 0's to whole numbers)
function round(value) {
  return Math.round(value * 1000) / 1000;
}

class Polygon {
  constructor(numOfSides) {
    this.numOfSides = numOfSides;
    this.polygonName = this.getName();
    this.sOIA = this.getSumOfInteriorAngles();
    this.iA = this.getInteriorAngle();
    this.eA = this.getExteriorAngle();
  }

  getName() {
    return this.numOfSides > 2 && this.numOfSides < 13
      ? polygonNames[this.numOfSides]
      : "?";
  }

  getSumOfInteriorAngles() {
    return this.numOfSides > 2 ? round((this.numOfSides - 2) * 180) : "?";
  }

  getInteriorAngle() {
    return this.numOfSides > 2
      ? round(((this.numOfSides - 2) * 180) / this.numOfSides)
      : "?";
  }

  getExteriorAngle() {
    return this.numOfSides > 2 ? round(360 / this.numOfSides) : "?";
  }

  reportValues() {
    polygonName.value = this.getName();
    sOIA.value = this.getSumOfInteriorAngles();
    iA.value = this.getInteriorAngle();
    eA.value = this.getExteriorAngle();
  }
}

let polygon = new Polygon(numOfSidesInput.value);
polygon.reportValues();

numOfSidesInput.addEventListener("input", () => {
  polygon = new Polygon(numOfSidesInput.value);
  polygon.reportValues();
});