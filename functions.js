'use strict';
// const bookings = [];

// const createBooking = function (flightNum, numPassenger = 1, price = 1) {
//   const booking = {
//     flightNum,
//     numPassenger,
//     price,
//   };
//   console.log(booking);
//   //   bookings.push(booking);
// };

// const flight = 'LH234';
// let chiji = {
//   name: 'Chijioke Nwagwu',
//   passport: 82743779384,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 82743779384) {
//     // alert('Check in');
//   } else {
//     // alert('Wrong passport');
//   }
// };

// console.log(flight);
// console.log(chiji);

// checkIn(flight, chiji);
// console.log(flight);
// console.log(chiji);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000000);
// };

// newPassport(chiji);

// checkIn(flight, chiji);

// const oneWord = function (str) {
//   return str.replace(' ', '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// const transformer = function (str, fn) {
//   //   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// // return function
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('hey');
// greeterHey('Chiji');
// greet('hey')('Gloria');

// CALL AND APPLY
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Chijioke Nwagwu');
lufthansa.book(436, 'Nathan Wisest');

console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

book.call(eurowings, 23, 'Vincent Gloria');
console.log(eurowings);

book.call(lufthansa, 40, 'Chizoba Ugwu');
const flightData = [583, 'Vincent Ugwu'];

book.apply(eurowings, flightData);
