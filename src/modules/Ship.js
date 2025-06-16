export default class Ship {
  constructor(length, numHits = 0, isShipSunk = false) {
    this.length = length;
    this.numHits = numHits;
    this.isShipSunk = isShipSunk;
  }

  hit() {
    this.numHits += 1;
  }

  isSunk() {
    this.isShipSunk = this.numHits === this.length;
    return this.isShipSunk;
  }
}
