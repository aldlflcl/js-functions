// currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
// 호출
console.log(curriedMultiply(5)(3));

// Currying 함수의 이점? 파라미터에 5가 계속 들어간다면 이렇게 하면 된다..
const curriedMultiplyBy5 = curriedMultiply(5);
console.log(curriedMultiplyBy5(4));
console.log(curriedMultiplyBy5(3));
console.log(curriedMultiplyBy5(2));
