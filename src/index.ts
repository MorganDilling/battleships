// imports
import input from '../lib/input';
import {
  Grid, stringCoordsToVector2
} from '../lib/Grid';
import {
  Ship, HealthStatus
} from '../lib/Ship';
import { rotation } from '../lib/Instance';
import Vector2 from '../lib/vector2';
import GameRules from '../lib/GameRules';
import PlayerData from '../lib/PlayerData';
import IsValidPos from '../lib/IsValidPos';

// game rules
const gameRules = new GameRules({
  'gridSize': 9,
  'shipSizes': [
    5, 4, 4, 3, 2
  ]
});

// main
const main = async () => {
  console.clear();

  // initialise player data
  const p1Name = await input('Enter player one name: ');
  const p2Name = await input('Input player two name: ');

  const onePlayerData = new PlayerData(gameRules, p1Name);
  const twoPlayerData = new PlayerData(gameRules, p2Name);

  const askForShips = async (pData:PlayerData) => {
    for (let i = 0; i < gameRules.maxShips; i++) {
      pData.ships.render();

      console.log(`\n${onePlayerData.playerName} enter ships...\n`);

      console.log(`Ship Size: ${gameRules.shipSizes[i]}\n`);

      const rot = await input('Enter ship rotation (v/h): ');
      const Rotation = rot === 'h' ? rotation.Horizontal : rot === 'v' ? rotation.Vertical : rotation.Horizontal;

      let valid = false;
      let coord:Vector2 = new Vector2;
      while (valid === false) {
        coord = stringCoordsToVector2(await input('Enter ship coordinate: '));
        valid = IsValidPos(coord, gameRules.gridSize, gameRules.shipSizes[i], Rotation);
      }


      const sz = gameRules.shipSizes[i];


      pData.placeShip(coord, sz, Rotation);
    }
  };

  await askForShips(onePlayerData);

  console.log('shouldnt run yet');


  onePlayerData.ships.render();

  await input('Enter to confirm... ');

  console.clear();

  await askForShips(twoPlayerData);

};

main();


// const g = new Grid(9);

// const s = new Ship(new Vector2(5, 3), 5, rotation.Vertical);

// g.children.push(s);

// console.log(s.position, s.occupies);

// s.position = new Vector2(7, 2);

// const stringToV2 = stringCoordsToVector2('e5');

// console.log('e5', stringToV2);

// s.position = stringToV2;


// console.log(s.position, s.occupies);

// console.log(g);

// s.occupies[0].value = HealthStatus.Destroyed;
// s.occupies[1].value = HealthStatus.Destroyed;
// s.occupies[2].value = HealthStatus.Destroyed;
// s.occupies[3].value = HealthStatus.Destroyed;
// s.occupies[4].value = HealthStatus.Destroyed;

// g.render();

// const clock = async () => {
//   console.clear();
//   g.render();

//   console.log('children', g.children);
//   g.children.map(child => console.log(child.health, child.occupies, child.position));



//   const coord = await input('Enter ship coordinate: ');
//   const size = await input('Enter ship size: ');
//   const rot = await input('Enter ship rotation (v/h): ');

//   const Rotation = rot === 'h' ? rotation.Horizontal : rot === 'v' ? rotation.Vertical : rotation.Horizontal;

//   const vec = stringCoordsToVector2(coord);
//   const sz = Number(size);

//   g.children.push(new Ship(vec, sz, Rotation));


//   clock();
// };

// clock();
