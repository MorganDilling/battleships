import GameRules from './GameRules';
import { Grid } from './Grid';
import { rotation } from './Instance';
import { Ship } from './Ship';
import Vector2 from './vector2';

export default class PlayerData {
  ships:Grid;
  hits:Grid;
  playerName:string;
  maxShips:number;
  constructor(gameRules:GameRules, playerName:string) {
    this.ships = new Grid(gameRules.gridSize);
    this.hits = new Grid(gameRules.gridSize);
    this.playerName = playerName;
    this.maxShips = gameRules.maxShips;
  }

  placeShip (position:Vector2, size:number, rotation:rotation) {
    if (this.ships.children.length === this.maxShips)
      return;
    const ship = new Ship(position, size, rotation);
    this.ships.children.push(ship);
  }
}
