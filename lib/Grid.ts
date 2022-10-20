import {
  alphabet, getIndexFromChar
} from './letters';
import Vector2 from './vector2';
import {
  Ship, HealthStatus
} from './Ship';
import {
  Instance, rotation
} from './Instance';
import chalk from 'chalk';

/**
   * Example: "a3" returns Vector2 { x: 0, y: 2 }
   */
export const stringCoordsToVector2 = (stringCoords:string):Vector2 => {
  const arrayCoords = stringCoords.split(''); // [0] = X [1] = Y
  const x = getIndexFromChar(arrayCoords[0]);
  const y = Number(arrayCoords[1]) - 1;

  return new Vector2(x, y);
};

class InvalidGridSizeError extends Error {
  constructor(size:number) {
    super();
    if (size < 1)
      this.message = 'Grid size must be greater than 0.';

    else if (size > alphabet.length)
      this.message = `Grid size must be less than ${alphabet.length}.`;

  }
}

export class Grid {
  children:Array<Ship>;
  renderBuffer:Array<Array<string>>;
  gridSize:number;
  constructor(gridSize:number) {
    this.children = [];
    this.renderBuffer = [];
    this.gridSize = gridSize;

    if (gridSize < 1)
      throw new InvalidGridSizeError(gridSize);
  }

  // ⛴   🔥    💣
  render() {
    this.renderBuffer = []; // clear buffer
    for (let i0 = 0; i0 < this.gridSize; i0++) {
      const temp:Array<string> = [];
      for (let i1 = 0; i1 < this.gridSize; i1++)
        temp.push(' ');
      this.renderBuffer.push(temp);
    }

    this.children.map(child => {
      child.occupies.map(occuputation => {
        const vec = occuputation.pos;
        if (occuputation.value === HealthStatus.Healthy)
          this.renderBuffer[vec.y][vec.x] = chalk.grey('■');
        else if (occuputation.value === HealthStatus.Destroyed)
          this.renderBuffer[vec.y][vec.x] = chalk.red('⨯');

      });

    });

    // render
    let output = '\n   ';
    for (let i = 0; i < this.gridSize; i++)
      output += ` ${chalk.yellow(i + 1)} ` + ' ';


    output += '\n  ┌';
    for (let i = 0; i < this.gridSize * 2 - 1; i++)
      if (i % 2 !== 0)
        output += '┬';

      else
        output += '───';


    output += '┐';

    for (let i0 = 0; i0 < this.gridSize; i0++) {
      let temp = `\n${chalk.blue(alphabet[i0])} │`;
      for (let i1 = 0; i1 < this.gridSize; i1++) {
        const item = this.renderBuffer[i0][i1];
        temp += ` ${item !== null ? item : ' '} │`;
      }
      output += temp;
      output += '\n  ';
      if (i0 + 1 === this.gridSize) {
        output += '└';
        for (let i = 0; i < this.gridSize * 2 - 1; i++)
          if (i % 2 !== 0)
            output += '┴';

          else
            output += '───';
        output += '┘';
      }

      else {
        output += '├';
        for (let i = 0; i < this.gridSize * 2 - 1; i++)
          if (i % 2 !== 0)
            output += '┼';

          else
            output += '───';
        output += '┤';

      }

    }

    console.log(output);
  }
}
