const assert = require('assert');
const Rooster = require('../index');

describe('Rooster', () => {
 describe('.announceDawn ', () => {
   it('returns a rooster call', () => {

     //setup
      const expected = 'cock-a-doodle-doo!';
     //exercise
      const actual = Rooster.announceDawn();
     //verify
      assert.equal(actual, expected);
   });
  });
  describe('.timeAtDawn', () => {
    it('returns its argument as a string', () => {
       //setup
      const inputNumber = 14;
      const expected = '14';
     //exercise
      const actual = Rooster.timeAtDawn(inputNumber);
     //verify
      assert.equal(actual, expected);
    });
    it('throws an error if passed a number greater than 0', () => {

      //setup
      const inputNumber = -5;
      const expected = RangeError;

     //verify
      assert.throws(() => {
        Rooster.timeAtDawn(inputNumber);
      }, expected);
    });
        it('throws an error if passed a number more than 23', () => {

      //setup
      const inputNumber = 30;
      const expected = RangeError;

     //verify
      assert.throws(() => {
        Rooster.timeAtDawn(inputNumber);
      }, expected);
    });
  });
});