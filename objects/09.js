const adventurer = {
    name: 'Alice',
    cat: {
        name: 'Dinah'
    }
};

console.log(adventurer.dog.name);
// console.log(adventurer.dog?.name);
// expected output: undefined

// Оператор опциональной последовательности предоставляет способ упростить доступ к значениям в цепочке объектов, когда возможно, что какое-то свойство (или метод) в ней равно undefined или null.