var spam = "ham";
var eggs = "toast";

var bork = { [spam]: eggs };
console.log(bork);

var newBar = Object.assign({ cBar: 21 }, bork);
console.log(newBar);

bat = Object.getOwnPropertyDescriptor(newBar, "cBar");
console.log(bat);

var bash = Object.create(newBar);
console.log(bash);
console.log(bash.cBar);

function Foo() {}

console.log(Foo.prototype);

var a = new Foo();
console.log(Object.getPrototypeOf(a) === Foo.prototype);

var sonOfBork = Object.create(bork);
console.log(sonOfBork);
console.log(Object.getPrototypeOf(sonOfBork));
console.log(sonOfBork["ham"]);
