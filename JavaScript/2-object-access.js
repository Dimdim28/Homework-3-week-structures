'use strict';

// Object/Hash
const person = {
  name: 'Dima',
  city: 'Kiev',
  born: 121,
};

console.log('Person name is: ' + person.name);
console.log('Person name is: ' + person['name']);

delete person.name;
console.dir({ person });

delete person['city'];
console.dir({ person });

// With getter
const person2 = {
  name: 'Ivan Sergienko',
  get city() {
    return 'Kiev';
  },
  set city(value = 'Kiev') {
    console.log('Ivan remains in ' + value);
  },
};

person2.city = 'Kiev';

console.dir({ person2 });
