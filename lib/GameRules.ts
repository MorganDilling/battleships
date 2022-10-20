export default class GameRules {
  gridSize:number;
  maxShips: number;
  shipSizes: Array<number>;
  constructor(data: {gridSize: number, shipSizes:Array<number>}) {
    this.gridSize = data.gridSize;
    this.maxShips = data.shipSizes.length;
    this.shipSizes = data.shipSizes;
  }
}
