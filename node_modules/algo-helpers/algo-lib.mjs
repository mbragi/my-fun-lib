export function minMax(arr) {
  if (!Array.isArray(arr)) {
    return "Input must be an array.";
  }
  if (arr.length < 2) {
    return "Please provide an array with more than one element.";
  }

  if (!arr.every((item) => typeof item === "number")) {
    return "Array must contain only numbers.";
  }

  let min;
  let max = 0;
  arr.map((m, index) => {
    if (index === 0) {
      min = m;
      max = m;
    }
    if (arr[index] < min) {
      min = m;
    }

    if (arr[index] > max) {
      max = m;
    }
  });

  return { min, max };
}
export function sort(arr, order = "DESC") {
  if (!Array.isArray(arr)) {
    return "Input must be an array.";
  }
  if (arr.length < 2) {
    return "Please provide an array with more than one element.";
  }
  if (order !== "DESC" && order !== "ASC") {
    return "Only 'ASC' and 'DESC' order are allowed.";
  }
  if (!arr.every((item) => typeof item === "number")) {
    return "Array must contain only numbers.";
  }

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      const condition =
        order === "ASC" ? arr[j] > arr[j + 1] : arr[j] < arr[j + 1];

      if (condition) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
      
    }
  }

  return arr
}
