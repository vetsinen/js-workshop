const fact = require('./factorial')

test('1!', function () {
    expect(fact(1)).toBe(1)
});