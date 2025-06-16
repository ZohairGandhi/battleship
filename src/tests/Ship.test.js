/* eslint-disable no-undef */
import Ship from '../modules/Ship';

let testShip;

test('hit() causes numHits to increase', () => {
  testShip = new Ship(5);
  testShip.hit();
  expect(testShip.numHits).toBe(1);
});

test('isSunk() returns true after length number of hits', () => {
  testShip = new Ship(5, 5);
  expect(testShip.isSunk()).toBeTruthy();
});

test('isSunk() returns false if under length number of hits', () => {
  testShip = new Ship(5, 4);
  expect(testShip.isSunk()).toBeFalsy();
});
