export default class Vector2 {
  x: number;
  y: number;
  constructor(x?:number, y?:number) {
    this.x = x || 0;
    this.y = y || 0;
  }

  get magnitude() {
    return Math.sqrt((this.x ^ 2) + (this.y ^ 2));
  }

  add(vector2:Vector2) {
    return new Vector2(this.x + vector2.x, this.y + vector2.y);
  }

  sub(vector2:Vector2) {
    return new Vector2(this.x - vector2.x, this.y - vector2.y);
  }

  mult(value:number) {
    return new Vector2(this.x * value, this.y * value);
  }

  div(value:number) {
    return new Vector2(this.x / value, this.y / value);
  }
}
