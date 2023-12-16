import { fetchData } from './fetchData';
import axios from 'axios';
 
 
jest.mock('axios');
 
// const sum = require('./sum');


// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

// // test('object assignment', () => {
// //     const data = {one: 1};
// //     data['two'] = 2;
// //     expect(data).toEqual({one: 1, two: 2});
// //   });

//   test('adding positive numbers is not zero', () => {
//     for (let a = 1; a < 10; a++) {
//       for (let b = 1; b < 10; b++) {
//             console.log(a+b);
//             expect(a + b).not.toBe(0);
//       }
//     }
//   });

//   const shoppingList = [
//     'diapers',
//     'kleenex',
//     'trash bags',
//     'paper towels',
//     'beer',
//   ];
  
//   test('the shopping list has beer on it', () => {
//     // expect(shoppingList).toContain('beer');
//     expect(new Set(shoppingList)).toContain('paper towels');
//   });


   
// describe('fetchData', () => {
//   it('fetches successfully data from an API', async () => {
 
//   });
 
//   it('fetches erroneously data from an API', async () => {
 
//   });
// });