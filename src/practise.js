// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours,
//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery({ time = '22.00', address, starterIndex = 1, mainIndex = 1 }) {
//     console.log(
//       `Order Recieved at ${time} which were ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}, Delivered to ${address}`
//     );
//   },
//   orderPizza(mainIng, ...otherIng) {
//     console.log(mainIng);
//     console.log(otherIng);
//   },
//   orderPasta(int1, int2, int3) {
//     console.log(`here are the delicious pasta with ${int1}, ${int2}, ${int3}`);
//   },
// };

// console.log(restaurant.order?.(0, 1) ?? 'Function does not exists');
// console.log(restaurant.orders?.(0, 1) ?? 'Function does not exists');

// const newRestaurent = { founded: 1998, ...restaurant, founder: 'jecobs' };
// console.log(newRestaurent);

// newRestaurent.name='restaurent roma'

// console.log(restaurant.name);
// console.log(newRestaurent.name)

// const ingredients = [
//   prompt('lets make pasta? ingredient 1'),
//   prompt('ingredient 2'),
//   prompt('ingredient 3'),
// ];

// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// restaurant.orderDelivery({
//   address: 'killa raod',
//   time: '15.30',
//   starterIndex: 2,
//   mainIndex: 2,
// });

// // destructuring objects

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const { name: resName, openingHours: hours, categories: cate } = restaurant;
// console.log(resName, hours, cate);

// const { menu = [], starterMenu = [] } = restaurant;
// console.log(menu, starterMenu);

// // nested destructuring.

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);
// //mutating variables
// let a = 111;
// let b = 999;

// const obj = { a: 5, b: 8, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// const arr = [12, 13, 5];
// const [x, y, z] = arr;
// console.log(z, y, x);

// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// //swapping varaible
// let temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// //using distructuring
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 2);
// console.log(starter, mainCourse);

// const nested = [1, 2, [3, 4]];

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //default values in destructure

// const [p = 1, q = 1, r = 1] = [80, 6];
// console.log(p, q, r);

// const arr = [1, 5, 6, 4, 8];
// const newArr = [10, 5, ...arr];
// console.log(...newArr);

// const newMainMenu = [...restaurant.mainMenu, 'Burger'];
// console.log(newMainMenu);

// //copy mainMenu

// const copyMainMenu = [...restaurant.mainMenu];
// console.log(copyMainMenu);

// //join 2 array

// const menu = [...restaurant.mainMenu, ...newMainMenu];
// console.log(menu);

// const str = 'shafiq';
// const newStr = [...str];
// console.log(newStr);

//rest operator

// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, pasta, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, pasta, otherFood);

// const { sat, ...days } = { ...restaurant.openingHours };
// console.log(sat);

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// add(2, 5);
// add(2, 4, 4, 5, 10);
// add(5, 6, 10, 5);

// const x = [23, 25, 26];
// add(...x);

// restaurant.orderPizza('onion', 'cheese', 'spinach', 'pasta');
// restaurant.orderPizza('mushroom');

// console.log(3 || 'shafiq');
// console.log('' || 'shafiq');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || '' || 0 || 'shafiq' || 23 || null);
// restaurant.numberGuest = 23;
// const numGuest = restaurant.numberGuest ? restaurant : 10;
// console.log(numGuest);

// const guest2 = restaurant.numberGuest || 10;
// console.log(guest2);

// console.log(23 && 'shafiq');
// console.log(7 && 'shafiq');

// console.log('hello' && 23 && null && 'shafiq');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushroom', 'onion');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushroom','cheese')
// nullish coelesing operator
// restaurant.orderGuest = 0;
// const guest = restaurant.orderGuest ?? 10;
// console.log(guest);

// const rest1 = {
//   name: 'lockdown',
//   guestCount: 0,
// };

// const rest2 = {
//   name: 'darbar',
//   owner: 'nisar',
// };

//OR logical Assignment
// rest1.guestCount = rest1.guestCount || 10;
// rest2.guestCount = rest2.guestCount || 10;

// rest1.guestCount ||= 10;
// rest2.guestCount ||= 10;

//logical Nullish

// rest1.guestCount ??= 10;
// rest2.guestCount ??= 10;

//AND logical Assignment.

// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';
// console.log(rest1, rest2);

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// for (let item of menu) console.log(item);

// for (let item of menu.entries()) {
//   console.log(`${item[0] + 1}. ${item[1]}`);
// }

// console.log(restaurant);

// const user = [];

// console.log(user[0]?.name ?? 'user Doesnt exist');
// const properties = Object.values(openingHours);
// console.log(properties);

// let totalCounts = `we are open for ${properties.length} days : `;
// for (let [index, day] of properties.entries()) {
//   totalCounts += ` ${index + 1}.${day}`;
// }
// console.log(totalCounts);
// console.log(openingHours.mon?.open);

// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [day, { open, close }] of entries) {
//   console.log(`we open on ${day} at ${open} and close ${close}`);
// }

// for (const day of weekdays) {
//   const status = openingHours[day]?.open ?? 'closed';
//   console.log(`Restaurent for ${day} at ${status}`);
// }

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const [players1, players2] = game.players;
// console.log(players2);

// const [team1gk, ...fieldPlayers1] = players1;
// const [team2gk, ...fieldPlayers2] = players2;

// console.log(team1gk, fieldPlayers1);
// console.log(team2gk, fieldPlayers2);

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// console.log(players1Final);

// const { team1, x: draw, team2 } = game.odds;

// console.log(team1, draw, team2);
// const printGoals = function (...players) {
//   console.log(players);
//   console.log(`${players.length} goals were score`);
// };

// printGoals(...game.scored);

// team1 > team2 && console.log(`${game.team1} is Winnner`);
// team1 < team2 && console.log(`${game.team2} is Winnner`);

// for (let [i, v] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${v}`);
// }

// let sum = 0;
// const properties = Object.values(game.odds);
// console.log(properties);
// for (let mts of properties) {
//   sum += mts;
// }
// const oddAvg = sum / properties.length;
// console.log(oddAvg.toFixed(2));

// const odds = Object.entries(game.odds);
// console.log(odds);

// for (const [keys, value] of odds) {
//   console.log(`Odd of Victory ${game[keys] ?? 'draw'} : ${value}`);
// }
// const play = ['shafiq', 'shaikh', 'khan', 'shafiq', 'shafiq'];
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);

// const orderSet = new Set(['shafiq', 'afif', 'saif', 'afif', 'saif', 'shafiq']);
// console.log(orderSet.size);
// console.log(orderSet.has('afif'));
// console.log(orderSet.has('shaikh'));
// orderSet.add('nabeel');
// orderSet.add('nabeel');
// orderSet.delete('nabeel');
// // orderSet.clear();
// console.log(orderSet);

// for (const name of orderSet) console.log(name);

// const hotel = ['chef', 'waiter', 'chef', 'helper', 'waiter'];

// const uniqueHotel = new Set([...hotel]);

// console.log(uniqueHotel);
// console.log(uniqueHotel.size);
// console.log(new Set('shafiquddin'));

// const rest = new Map();
// rest.set('name', 'shah ghous');
// rest.set(1, 'hyderabad, India');

// rest
//   .set('categories', ['Mandi', 'shawaram', 'Paye', 'Biryani', 'Tandori'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'we are open:D')
//   .set(false, 'we are close:(');

// console.log(rest);

// console.log(rest.get(true));
// console.log(rest.get('close'));
// console.log(rest.get(1));

// const time = new Date().getHours();
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
// console.log(rest.has('categries'));
// console.log(rest.delete('close'));
// // rest.clear();
// rest.set(document.querySelector('h1'), 'heading');
// const arr = [1, 2];
// rest.set(arr, 'test');
// console.log(rest);
// console.log(rest.get(arr));

// const question = new Map([
//   ['question', 'what is the best programming language'],
//   [1, 'python'],
//   [2, 'java'],
//   [3, 'Javascript'],
//   [4, 'c'],
//   ['answer', 3],
//   [true, 'correct'],
//   [false, 'try again'],
// ]);
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`${key} : ${value}`);
//   }
// }
// const opt = Number(prompt('Enter your Answer'));
// console.log(question.get(question.get('answer') === opt));

// console.log([...question]);
// console.log([...question.keys()]);
// console.log([...question.values()]);

// 1. Create an array 'events' of the different game events that happened (no
//   duplicates)
//   2. After the game has finished, is was found that the yellow card from minute 64
//   was unfair. So remove this event from the game events log.
//   3. Compute and log the following string to the console: "An event happened, on
//   average, every 9 minutes" (keep in mind that a game has 90 minutes)
//   4. Loop over 'gameEvents' and log each element to the console, marking
//   whether it's in the first half or second half (after 45 min) of the game, like this:
//   [FIRST HALF] 17: ⚽ GOAL
//   GOOD LUCK

// const gameEvents = new Map([
//   [17, 'GOAL'],
//   [36, 'Substitution'],
//   [47, 'GOAL'],
//   [61, 'Substitution'],
//   [64, 'Yellow card'],
//   [69, 'Red card'],
//   [70, 'Substitution'],
//   [72, 'Substitution'],
//   [76, 'GOAL'],
//   [80, 'GOAL'],
//   [92, 'Yellow card'],
// ]);

// const events = [...new Set(gameEvents.values())];
// console.log(events);
// gameEvents.delete(64);
// console.log(gameEvents);

// for (const [key, value] of gameEvents) {
//   if (key < 45) {
//     console.log(`[FIRST HALF] ${key}: ${value}`);
//   } else {
//     console.log(`[SECOND HALF] ${key}: ${value}`);
//   }
// }

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));

// console.log(airline.lastIndexOf('Portugal'));
// console.log(airline.slice(8));
// console.log(airline.slice(4, 7));
// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(1, -1));
// console.log(airline.slice(-3));

// const checkMiddleSeats = function (seat) {
//   const s = seat.slice(-1);
//   if (s === 'E' || s === 'B') console.log('You got the middle seats');
//   else console.log('Your are Lucky');
// };

// checkMiddleSeats('11F');
// checkMiddleSeats('1E');
// checkMiddleSeats('11A');

// console.log(new String('shafiq'));
// console.log(typeof new String('Shafiq'));
// console.log(typeof new String('shafiq').slice(''));

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log('shafiq'.toUpperCase());
// console.log(airline.toLowerCase());

// const capitalize = function (passenger) {
//   const passengerArr = passenger.split(' ');
//   const netArr = [];
//   passengerArr.forEach(element => {
//     const lowerPassenger = element.toLowerCase();
//     netArr.push(element[0].toUpperCase() + lowerPassenger.slice(1));
//   });
//   return netArr.join(" ");
// };

// console.log(capitalize('shafiq shaikh saif'));

// const email = 'shafiquddin2k@gmail.com';
// const enteredEmail = ' ShafIQuddIN2K@Gmail.cOm \n';
// const normalizeEmail = enteredEmail.toLowerCase().trim();

// console.log(normalizeEmail === email);

// const priceGB = '288,97£';
// const priceUs = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUs);

// const msg = 'Hello shafiq you are very good guy shafiq';
// console.log(msg.replace('shafiq', 'shoaib'));
// console.log(msg.replace(/shoaib/g, 'shafiq'));

// const airplane = 'Airbus A320neo';

// console.log(airplane.includes('ne'));

// console.log(airplane.startsWith('A31'));
// console.log(airplane.endsWith('eo'));

// if (airplane.startsWith('Airbus') && airplane.endsWith('neo')) {
//   console.log('this is neo AirBus family');
// }

// const checkBaggage = function (items) {
//   const item = items.toLowerCase();
//   if (item.includes('knife') || item.includes('gun')) {
//     console.log('You are not allowed to Board');
//   } else {
//     console.log('Wellcome for Journey');
//   }
// };

// checkBaggage('I have some Fruits,Food and Knife');
// checkBaggage('I have laptops, books, clothes');
// checkBaggage('I have gun for self Protection');

// console.log('shafiq+shaikh+khan+pathan'.split('+'));

// const [firstName, lastName] = 'shafiq shaikh'.split(' ');

// const newName = ['Mr', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const passengers = function (passengers) {
//   const passenger = passengers.split(' ');
//   let capitalizeArr = [];
//   passenger.forEach(pass => {
//     capitalizeArr.push(pass.replace(pass[0], pass[0].toUpperCase()));
//   });
//   return capitalizeArr.join(' ');
// };

// console.log(passengers('shafiq afif Naziya Humera saif'));

// const maskMobileNo = function (number) {
//   const str = number + '';
//   const last = str.slice(-2);
//   return last.padStart(str.length, '*');
// };

// console.log(maskMobileNo(9881399773));

// const message = 'Bad Weather... All depature are in lines';

// console.log(message.repeat(5));

// const planeInLine = function (n) {
//   console.log(`there are ${n} ${'✈'.repeat(n)} are in line`);
// };

// planeInLine(5);
// planeInLine(3);
// planeInLine(2);
