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

// challenge 1
const [players1, players2] = game.players;
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
  //   for (let i = 0; i < playerName.length; i++) {
  //     console.log(playerName[i]);
  //   }
  console.log(playerName);
  console.log(`Number of goals scored is ${playerName.length}`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

printGoals(...game.scored);

team1 > team2 && console.log('Team 2 is mor likely to win');
team1 > team2 || console.log('Team 1 is mor likely to win');

// challenge 2
for (const [i, scorer] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${scorer}`);
}

let gameOddSum = 0;
for (const odd of Object.values(game.odds)) {
  gameOddSum += odd;
}
const oddsAverage = gameOddSum / Object.keys(game.odds).length;
console.log(`Game odd average is ${oddsAverage}`);

for (const [team, odd] of Object.entries(game.odds)) {
  const teamName = game[team] || 'draw';
  console.log(`Odd of victory for  ${teamName} is ${odd}`);
}

const scorers = {};

for (const [i, scorer] of game.scored.entries()) {
  scorers[scorer] = i;
}

console.log(scorers);

// challenge 3
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// create unique events
const allEventsName = Array.from(gameEvents.values());

const uniqueEvents = new Set(allEventsName);
console.log(uniqueEvents);

// delete first yellow card
gameEvents.delete(64);
console.log(gameEvents);

console.log(`An event happened every ${90 / gameEvents.size} minutes`);

for (const [eventTime, eventName] of gameEvents) {
  if (eventTime < 45) {
    console.log(`First half: ${eventName}`);
  } else {
    console.log(`Second half: ${eventName}`);
  }
}
