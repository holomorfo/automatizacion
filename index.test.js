const sum = require('./index')

test('sumar 1 + 2 debe resultar en 3', () => {
    expect(sum(1,2)).toBe(3)
})
