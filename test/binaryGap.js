import { assert } from "chai"
import { solution } from '../src/lessons/iterations/binaryGap/binaryGap.js'

describe("Find longest sequence of zeros in binary representation of an integer.", () => {
  describe("Entry validation", () => {
    it("Should return 0 when the given number is negative", () => {
      assert.strictEqual(solution(-10), 0);
    })
  })

  describe("Fixed tests", () => {
    it("Should return 2 when the given number is 9", () => {
      assert.strictEqual(solution(9), 2);;
    })  

    it("Should return 4 when the given number is 529", () => {
      assert.strictEqual(solution(529), 4);
    })
    
    it("Should return 0 when the given number is 15", () => {
      assert.strictEqual(solution(15), 0);;
    })

    it("Should return 5 when the given number is 1041", () => {
      assert.strictEqual(solution(9), 2);;
    })
  })
  
})