import { sum } from './lib.js'

test('add 1 + 2 == 3', () => {
  expect(sum(1, 2)).toBe(3)
})