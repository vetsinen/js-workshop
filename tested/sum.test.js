const sum = require('./sum');

test('adds 1 + 2 to equal 3', function () {
    expect(sum(1, 2)).toBe(3);
});

test('test: -5,5', function () {
    expect(sum(-5, 5)).toBe(0);
});