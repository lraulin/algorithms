const createFactory = ({ a, b } = {}) => ({
  a,
  b,
});

const a = 5;
const b = 10;

const factory = createFactory();
console.log(factory);

const createFactory2 = (a = 15, b = 20) => ({
  a,
  b,
});

const factory2 = createFactory2(b);
console.log(factory2);

// So ({ a, b } = {}) as the parameter allows you to omit any parameter, even the first one,
// without passing in undefined or null.
