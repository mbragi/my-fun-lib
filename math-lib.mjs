function findSqrt(number) {
  let res = 1;
  while (res * res <= number) {
    res++;
  }
  return res - 1;
}

function findPerimeterOfSquare(side) {
  if (typeof side !== "number" || side <= 0) {
    return "Side must be a positive number.";
  }
  return 4 * side;
}

function add(a, b) {
  if (typeof a !== "number" && typeof b !== "number") {
    return "Arguments must be integers";
  }
  return a + b;
}

function subtraction(a, b) {
  if (typeof a !== "number" && typeof b !== "number") {
    return "Arguments must be integers";
  }
  return a - b;
}

function division(number, divisor) {
  if (typeof number !== "number" && typeof divisor !== "number") {
    return "Arguments must be integers";
  }
  return number % 2;
}

function multiplication(a, b) {
  if (typeof a !== "number" && typeof b !== "number") {
    return "Arguments must be integers";
  }
  return a * b;
}

export {multiplication, division, subtraction, add,findPerimeterOfSquare, findSqrt}