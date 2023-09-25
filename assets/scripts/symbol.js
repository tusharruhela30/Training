
const uid = Symbol('uid');
console.log(uid);

const user = {
  [uid]: 'p1',
  name: 'abcd',
  age: 30,
  [Symbol.toStringTag]: 'User Object'
};

user[uid] = 'p2';

// app land 
user.id = 'p2'; 

//console.log(user[Symbol('uid')]);
console.log(user);
console.log(Symbol('uid') === Symbol('uid'));
console.log(user.toString());

const company = {
  curEmployee:0,  
  employees: ['Max', 'Manu', 'Panna'],
  [Symbol.iterator]: function* employeeGenerator() {
   
    let currentEmployee = 0;
    while (currentEmployee < this.employees.length) {
      yield this.employees[currentEmployee];
      currentEmployee++;
    }
  }
};

const persons = ['Max', 'Manu'];
console.log(persons);

const course = { title: 'JavaScript Course'};

Reflect.setPrototypeOf(course, { toString() {return this.title}});
console.log(course);

const courseHandler = { get(obj, propertyName) {
    console.log(propertyName);
    if (propertyName === 'length') {
      return 0;
    }
    return obj[propertyName] || 'NOT FOUND';
  },
  set(obj, propertyName, newValue) {
    if (propertyName != 'rating') { return; }
    obj[propertyName] = newValue;
  }
};

const pCourse = new Proxy(course, courseHandler);
pCourse.rating = 12;
console.log(pCourse.title, pCourse.length, pCourse.rating);