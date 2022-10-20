import { rotation } from './Instance';
import Vector2 from './vector2';

export default (pos:Vector2, gridSize:number, shipSize:number, shipRot:rotation) => {
  const lowerBound = (shipRot === rotation.Horizontal ? pos.x : pos.y) - Math.floor(shipSize / 2);
  const upperBound = (shipRot === rotation.Horizontal ? pos.x : pos.y) + Math.ceil(shipSize / 2);

  console.log(lowerBound, upperBound, upperBound - lowerBound, shipSize);

  return lowerBound >= 0 && upperBound <= gridSize;

};
