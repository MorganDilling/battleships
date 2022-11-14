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
import IsValidPosition from '../lib/IsValidPosition';

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
  const player1Name = await input('Enter player one name: ');
  const player2Name = await input('Input player two name: ');

  const player1PlayerData = new PlayerData(gameRules, player1Name);
  const player2PlayerData = new PlayerData(gameRules, player2Name);

  const askForShips = async (playerData:PlayerData) => {
    for (let i = 0; i < gameRules.maxShips; i++) {
      playerData.ships.render();

      console.log(`\n${player1PlayerData.playerName} enter ships...\n`);

      console.log(`Ship Size: ${gameRules.shipSizes[i]}\n`);

      let rotationString = '';

      while (rotationString !== 'horizontal' && rotationString !== 'vertical') {
        rotationString = await input('Enter ship rotation (vertical/horizontal): ');
        if (rotationString !== 'horizontal' && rotationString !== 'vertical')
          console.log('Invalid rotation. Try again.');
      }


      const Rotation = rotationString === 'horizontal' ? rotation.Horizontal : rotationString === 'vertical' ? rotation.Vertical : rotation.Horizontal;

      let valid = false;
      let coordinate:Vector2 = new Vector2;
      while (valid === false) {
        coordinate = stringCoordsToVector2(await input('Enter ship coordinate: '));
        valid = IsValidPosition(coordinate, playerData.ships, gameRules.shipSizes[i], Rotation);

        valid === false && console.log('Invalid coordinate. Try again.');
      }


      const shipSize = gameRules.shipSizes[i];


      playerData.placeShip(coordinate, shipSize, Rotation);
    }
  };

  await askForShips(player1PlayerData);

  console.log('shouldnt run yet');


  player1PlayerData.ships.render();

  await input('Enter to confirm... ');

  console.clear();

  await askForShips(player2PlayerData);

};

main();
