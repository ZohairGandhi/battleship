/* eslint-disable no-undef */
import Gameboard from '../modules/Gameboard';
import Ship from '../modules/Ship';

let testBoard;
let testShip1;
let testShip2;

beforeEach(() => {
  testBoard = new Gameboard();
  testShip1 = new Ship(5);
  testShip2 = new Ship(4);
  testBoard.placeShip(testShip1, [0, 0], 'row');
  testBoard.placeShip(testShip2, [6, 9], 'col');
});

test('placeShip() places ship correctly', () => {
  expect(
    testBoard.board[0][0] &&
      testBoard.board[0][1] &&
      testBoard.board[0][2] &&
      testBoard.board[0][3] &&
      testBoard.board[0][4],
  ).toBeTruthy();
});

test('placeShip() does not extend past ship length', () => {
  expect(testBoard.board[0][5]).toBeFalsy();
});

test('receiveAttack() returns true if coords occupied', () => {
  expect(testBoard.receiveAttack([0, 0])).toBeTruthy();
});

test('receiveAttack() returns false if coords unoccupied', () => {
  expect(testBoard.receiveAttack([0, 5])).toBeFalsy();
});

test('receiveAttack() tracks missed attacks', () => {
  testBoard.receiveAttack([0, 5]);
  expect(testBoard.missedAttacks).toContainEqual([0, 5]);
});

test('areAllShipsSunk() returns false when ships not sunk', () => {
  expect(testBoard.areAllShipsSunk()).toBeFalsy();
});

test('areAllShipsSunk() returns false when one ship still floating', () => {
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
  ].forEach((coord) => testBoard.receiveAttack(coord));
  expect(testBoard.areAllShipsSunk()).toBeFalsy();
});

test('areAllShipsSunk() returns false when one ship still floating', () => {
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
    [6, 9],
    [7, 9],
    [8, 9],
    [9, 9],
  ].forEach((coord) => testBoard.receiveAttack(coord));
  expect(testBoard.areAllShipsSunk()).toBeTruthy();
});
