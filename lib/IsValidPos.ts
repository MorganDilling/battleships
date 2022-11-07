import { Grid } from './Grid';
import { rotation } from './Instance';
import Vector2 from './vector2';

export default (pos:Vector2, grid:Grid, shipSize:number, shipRot:rotation) => {
  console.log(pos, grid.gridSize, shipSize, shipRot);


  const lowerBound = (shipRot === rotation.Horizontal ? pos.x : pos.y) - Math.floor(shipSize / 2);
  const upperBound = (shipRot === rotation.Horizontal ? pos.x : pos.y) + Math.ceil(shipSize / 2);

  let inOccupiedSpace = false;
  grid.children.forEach(ship => {
    if (inOccupiedSpace === true)
      return;
    ship.occupies.forEach(o => {
      if (inOccupiedSpace === true)
        return;
      for (let i = lowerBound; i < upperBound + 1; i++) {
        const vec = new Vector2(shipRot === rotation.Horizontal ? i : pos.x, shipRot === rotation.Horizontal ? pos.y : i);


        if (vec.equals(o.pos)) {
          inOccupiedSpace = true;
          break;
        }

      }



    });
  });


  return lowerBound >= 0 && upperBound <= grid.gridSize && inOccupiedSpace === false;
};
