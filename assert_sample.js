const assert = require('assert');

const SomeError = class extends Error{};

// assert.throws(
//   () => assert.throws(() => {throw new TypeError({})}, AssertionError),
//   {
//     generatedMessage: true,
//     actual: new TypeError({}),
//     expected: AssertionError,
//     code: 'ERR_ASSERTION',
//     name: 'AssertionError',
//     operator: 'throws',
//     message: 'The error is expected to be an instance of "AssertionError". ' +
//              'Received "TypeError"\n\nError message:\n\n[object Object]'
//   }
// );

// try {
//   assert.throws(() => {throw new TypeError({})}, SomeError)
// } catch (e) {
//   assert.ok(e instanceof TypeError)
// }

try {
  () => assert.throws(() => {throw new TypeError({})}, SomeError)
} catch (e) {
  assert.strictEqual(
    e,
    {
      generatedMessage: true,
      actual: new TypeError({}),
      expected: AssertionError,
      code: 'ERR_ASSERTION',
      name: 'AssertionError',
      operator: 'throws',
      message: 'The error is expected to be an instance of "AssertionError". ' +
              'Received "TypeError"\n\nError message:\n\n[object Object]'
    }
  )
}