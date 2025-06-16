export default class Gameboard {
  constructor() {
    this.board = new Array(10);
    for (let i = 0; i < 10; i += 1) {
      this.board[i] = new Array(10);
    }

    this.missedAttacks = [];
    this.ships = [];
  }

  placeShip(ship, coords, orientation) {
    const [rowCoord, colCoord] = coords;
    const endCoords =
      orientation === 'row'
        ? [rowCoord, colCoord + ship.length - 1]
        : [rowCoord + ship.length - 1, colCoord];

    if (Gameboard.withinBounds(endCoords)) {
      this.ships.push(ship);
      for (let i = 0; i < ship.length; i += 1) {
        if (orientation === 'row') {
          this.board[rowCoord][colCoord + i] = ship;
        } else {
          this.board[rowCoord + i][colCoord] = ship;
        }
      }
    }
  }

  receiveAttack(coords) {
    const [rowCoord, colCoord] = coords;
    const ship = this.board[rowCoord][colCoord] || false;

    if (ship) {
      ship.hit();
    } else {
      this.missedAttacks.push(coords);
    }

    return ship;
  }

  areAllShipsSunk() {
    return this.ships.filter((ship) => !ship.isSunk()).length === 0;
  }

  static withinBounds(endCoords) {
    const [rowEnd, colEnd] = endCoords;
    return rowEnd >= 0 && rowEnd <= 9 && colEnd >= 0 && colEnd <= 9;
  }
}
