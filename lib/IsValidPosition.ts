import { Grid } from './Grid';
import { rotation } from './Instance';
import Vector2 from './vector2';

export default (position:Vector2, grid:Grid, shipSize:number, shipRotation:rotation) => {
  const correctPosiiton = shipRotation === rotation.Horizontal ? position.x : position.y;

  const lowerBound = correctPosiiton - Math.floor(shipSize / 2);
  const upperBound = correctPosiiton + Math.ceil(shipSize / 2);

  let inOccupiedSpace = false;
  grid.children.forEach(ship => {
    if (inOccupiedSpace === true)
      return;
    ship.occupies.forEach(occupation => {
      if (inOccupiedSpace === true)
        return;
      for (let i = lowerBound; i < upperBound + 1; i++) {
        const vector = new Vector2(shipRotation === rotation.Horizontal ? i : position.x, shipRotation === rotation.Horizontal ? position.y : i);

        if (vector.equals(occupation.pos)) {
          inOccupiedSpace = true;
          break;
        }
      }
    });
  });

  return lowerBound >= 0 && upperBound <= grid.gridSize && inOccupiedSpace === false;
};
