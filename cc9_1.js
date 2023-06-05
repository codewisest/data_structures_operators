'use strict';
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const players1 = game.players[0];
const players2 = game.players[1];
const [gk1, ...fieldPlayers1] = players1;
const [gk2, ...fieldPlayers2] = players2;

console.log(gk1, gk2);

const allPlayers = [...players1, ...players2];

console.log(allPlayers);

const players1Final = ['Thiago', 'Coutinho', 'Perisic', ...players1];
console.log(players1Final);

let { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

const printGoals = function (...playerName) {
  for (let i = 0; i < playerName.length; i++) {
    console.log(playerName[i]);
  }
  console.log(`Number of goals scored is ${playerName.length}`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

printGoals(...game.scored);

team1 = game.odds.team1 < game.odds.team2;
const winner = 'team1' || 'team2';

console.log(winner);
