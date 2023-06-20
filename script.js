// 'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const airline = 'Nigerian Airways';

// console.log(airline.length);
// console.log(airline[6]);
// console.log(airline.indexOf('N'));

// console.log(airline.slice(0, airline.indexOf(' ')));

// const checkMiddleSeat = function (seat) {
//   if (seat.slice(-1) === 'C' || seat.slice(-1) === 'B') {
//     console.log('Congrats, you have a middle seat');
//   } else {
//     console.log('Nice one. You have a window seat');
//   }
// };

// checkMiddleSeat('11D');

// const passenger = 'jOnAS';
// const passengerLower = passenger.toLowerCase();
// console.log(passengerLower);

// const passengerCorrect = `${passengerLower[0].toUpperCase()}${passengerLower.slice(
//   1
// )}`;

// console.log(passengerCorrect);

// const email = 'hello@wisest.ca';
// const loginEmail = '    Hello@Wisest.ca  ';

// const normalizedEmail = loginEmail.toLowerCase().trim();

// console.log(loginEmail, normalizedEmail);
// const priceGB = '288,97#';
// const priceUS = priceGB.replace(',', '.').replace('#', '$');
// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23.';
// console.log(announcement.replaceAll('door', 'gate'));
// // Data needed for first part of the section
// // const restaurant = {
// //   name: 'Classico Italiano',
// //   location: 'Via Angelo Tavanti 23, Firenze, Italy',
// //   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
// //   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
// //   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

// //   openingHours: {
// //     thu: {
// //       open: 12,
// //       close: 22,
// //     },
// //     fri: {
// //       open: 11,
// //       close: 23,
// //     },
// //     sat: {
// //       open: 0, // Open 24 hours
// //       close: 24,
// //     },
// //   },

// //   order: function (starterIndex, mainIndex) {
// //     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
// //   },
// //   orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
// //     console.log(starterIndex);
// //   },

// //   orderPasta: function (ing1, ing2, ing3) {
// //     console.log(`Here is your pasta made with ${ing1}, ${ing2} and ${ing3}`);
// //   },

// //   orderPizza: function (mainIngredient, ...otherIngredients) {
// //     console.log(otherIngredients);
// //   },
// // };

// // // Maps
// // const restaurantMap = new Map();

// // restaurantMap.set('name', 'The Place');
// // console.log(restaurantMap);

// // restaurantMap
// //   .set('categories', ['Organic', 'Artificial', 'Hybrid'])
// //   .set('open', 11)
// //   .set('close', 23)
// //   .set(true, 'we are open')
// //   .set(false, 'we are closed');

// // console.log(restaurantMap.get(true));

// // console.log(restaurantMap);

// // const time = 8;
// // console.log(
// //   restaurantMap.get(
// //     time > restaurantMap.get('open') && time < restaurantMap.get('close')
// //   )
// // );

// // console.log(restaurantMap.has('open'));

// // const mapOfRestaurant = new Map(Object.entries(restaurant));
// // console.log();
// // mapOfRestaurant;
// // // ---------- Sets -----------
// // const ordersSet = new Set([
// //   'Pasta',
// //   'Pizza',
// //   'Pizza',
// //   'Risotto',
// //   'Pasta',
// //   'Pizza',
// // ]);

// // console.log(ordersSet);
// // console.log(ordersSet.size);
// // console.log(ordersSet.has('Pizza'));
// // ordersSet.add('Garlic Bread');
// // ordersSet.add('Garlic Bread');
// // ordersSet.delete('Risotto');

// // console.log(ordersSet);

// // for (const order of ordersSet) {
// //   console.log(order);
// // }

// // const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// // const staffUnique = new Set(staff);

// // console.log([...staffUnique]);

// // // ----------- LOOP OBJECTS -----------------
// // for (const [day, { open, close }] of Object.entries(restaurant.openingHours)) {
// //   console.log(`On ${day}, we open by ${open} and close by ${close}`);
// // }

// // let openStr = `we are open on `;
// // for (const day of Object.keys(restaurant.openingHours)) {
// //   openStr += `${day}, `;
// // }

// // console.log(openStr);

// // for (const { open, close } of Object.values(restaurant.openingHours)) {
// //   console.log(open, close);
// // }

// // ({ open, close } = Object.values(restaurant.openingHours));
// // console.log(open, close);

// // const valueTest = Object.values(restaurant.openingHours);
// // console.log(valueTest);
// // ----------- OPTIONAL CHAINING -------------------
// // const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// // for (const day of days) {
// //   console.log(day);
// //   console.log(
// //     `On ${day} we open at ${restaurant.openingHours[day]?.open ?? 'closed'}`
// //   );
// // }

// // console.log(restaurant.openingHours.mon?.open);

// // // ------------ LOOPING ---------------------
// // const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// // for (const item of menu) {
// //   console.log(item);
// // }

// // for (const [i, item] of menu.entries()) {
// //   console.log(i, item);
// // }

// // ------------ DESTRUCTURE --------------------
// // restaurant.orderPizza('Mushrooms', 'Onions', 'Spinach');
// // // rest arrays
// // const arr = [1, 2, ...[3, 4]];
// // const [a, b, ...remaining] = [1, 2, 3, 4, 5];

// // console.log(remaining);

// // const [food1, food2, ...otherFoods] = [
// //   ...restaurant.mainMenu,
// //   ...restaurant.starterMenu,
// // ];
// // console.log(otherFoods);

// // // rest objects
// // const { sat, ...weekdays } = restaurant.openingHours;
// // console.log(weekdays);

// // // function
// // const add = function (...numbers) {
// //   let sum = 0;
// //   for (let i = 0; i < numbers.length; i++) {
// //     sum += numbers[i];
// //   }
// //   return sum;
// // };

// // console.log(add(2, 5));
// // console.log(add(2, 5, 6, 10));
// // console.log(add(2, 8, 6, 10));

// // console.log('----short circuit OR -----');
// // console.log(0 || 'Chiji');
// // console.log('' || 'Chiji');
// // console.log(undefined || null);
// // console.log(null || undefined);

// // restaurant.numGuest = 0;
// // let guest1;
// // if (restaurant.numGuest === true) {
// //   guest1 = restaurant.numGuest;
// // } else {
// //   guest1 = 10;
// // }

// // const guest2 = restaurant.numGuest ? restaurant.numGuest : 10;

// // const guest3 = restaurant.numGuest || 10;

// // console.log(guest1, guest2, guest3);

// // console.log('----short circuit AND -----');
// // console.log(0 && 'Jonas');
// // console.log(7 && 'Chiji');

// // if (restaurant.orderPizza) {
// //   restaurant.orderPizza('mushrooms', 'spinach');
// // }

// // restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// // // spread arrays
// // const ingredients = [
// //   prompt('Let us make pasta. Ingredient 1?'),
// //   prompt('Ingredient 2?'),
// //   prompt('Ingredient 3?'),
// // ];

// // restaurant.orderPasta(...ingredients);
// // restaurant.orderDelivery({
// //   time: '22:30',
// //   address: 'Via del Sole, 21',
// //   mainIndex: 2,
// //   starterIndex: 2,
// // });

// // const arr = [7, 8, 9];
// // const newArr = [5, 6, ...arr];

// // console.log(newArr);
// // console.log(...newArr);

// // const newMenu = [...restaurant.mainMenu, 'Eba'];
// // console.log(newMenu);

// // const mainMenuCopy = [...restaurant.mainMenu];
// // console.log(mainMenuCopy);

// // const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// // console.log(menu);

// // // spread objects
// // const newRestaurant = { ...restaurant, founder: 'WisestMe', foundedIn: '1987' };
// // console.log(newRestaurant);
// // let { name: restaurantName, openingHours, categories } = restaurant;
// // // console.log(restaurantName, openingHours, categories);
// // let { opening = {}, mainMenu = {} } = restaurant;
// // console.log(opening, mainMenu);

// // const {
// //   sat: { open, close },
// // } = openingHours;
// // console.log(open, close);

// // let [main, , secondary] = restaurant.categories;

// // console.log(main, secondary);

// // [secondary, main] = [main, secondary];
// // console.log(main, secondary);

// // const [starterDish, mainDish] = restaurant.order(1, 2);

// // console.log(starterDish, mainDish);

// // const nested = [2, 4, [5, 6]];

// // const [i, , [j, l]] = nested;
// // console.log(l);

(function () {
  console.log('This will run only once');
  const isItPrivate = true;
})();

(() => {
  console.log('run arrow only once');
})();

// console.log(isItPrivate);

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passenger`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();
