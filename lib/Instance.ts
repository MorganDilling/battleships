import Vector2 from './vector2';

export enum rotation {
  Vertical,
  Horizontal
}

export class Instance {
  private _position: Vector2;
  private _size: number;
  private _rotation: rotation;
  _updateCallback: null | ((props:Instance) => void);
  constructor(Position:Vector2, Size:number, Rotation:rotation) {
    this._position = Position;
    this._size = Size;
    this._rotation = Rotation;
    this._updateCallback = null;
  }

  set position (newCoords:Vector2) {
    this._position = newCoords;
    this._updateCallback && this._updateCallback(this);
  }

  get position ():Vector2 {
    return this._position;
  }

  set size (size:number) {
    this._size = size;
    this._updateCallback && this._updateCallback(this);
  }

  get size ():number {
    return this._size;
  }

  set rotation (rot:number) {
    this._rotation = rot;
    this._updateCallback && this._updateCallback(this);
  }

  get rotation ():number {
    return this._rotation;
  }

}
