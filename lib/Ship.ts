import Vector2 from './vector2';
import {
  Instance, rotation
} from './Instance';

export enum HealthStatus {
  Healthy,
  Destroyed
}

export class Ship extends Instance {
  health: number;
  occupies: Array<{['value']: HealthStatus, ['pos']: Vector2}>;
  constructor(position:Vector2, size:number, rotation:rotation) {
    super(position, size, rotation);
    this.health = size;
    this.occupies = [];

    this._updateOccupies();

    this._updateCallback = () => {
      this._updateOccupies();
    };
  }

  private _updateOccupies () {
    this.occupies = [];
    for (let i = 0; i < this.size; i++) {
      const current = this.occupies[i];

      const position = this.position[this.rotation === rotation.Horizontal ? 'x' : 'y'] - Math.floor(this.size / 2) + i;

      const vector = this.rotation === rotation.Horizontal ? new Vector2(position, this.position.y) : new Vector2(this.position.x, position);

      this.occupies[i] = {
        'value': current ? current.value : HealthStatus.Healthy, 'pos': vector
      };
    }}
}
