//função convencional
function soma(num1, num2) {
  return num1 + num2;
}

const resultado = soma(1, 2);
console.log("função classica", resultado);

//Arrow function
//definir return explicitamente
const soma2 = (num1, num2) => {
  return num1 + num2;
};

const resultado2 = soma2(1, 2);

console.log("arrow function", resultado2);

//form mais curta
const soma3 = (num1, num2) => num1 + num2;
const resultado3 = soma3(1, 2);
console.log("arrow function enxuto", resultado3);
