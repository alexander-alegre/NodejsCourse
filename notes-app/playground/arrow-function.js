// basic arrow function
var square = x => x * x;
console.log(square(10));
// complex arrow function
var user = {
    name: 'Alex',
    sayHi: () => {
        console.log(`Hi. I'm ${user.name}`);
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    }
}
user.sayHi();
user.sayHiAlt(1,2,3);