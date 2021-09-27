'use strict';

const person1 = {};
person1.name = 'Dima';
person1.city = 'Kiev';
person1.born = 121;

const person2 = new Object();
person2.name = 'Dima';
person2.city = 'Kiev';
person2.born = 121;

const person3 = {
  name: 'Dima',
  city: 'Kiev',
  born: 121,
};

console.dir({ person1, person2, person3 });
