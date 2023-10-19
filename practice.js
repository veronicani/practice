function reduce(array, fn, initial) {
  let result = initial;
  array.forEach(val => {
    result = fn(result, val);
  });
  return result;
}

const nums = [4, 1, 3];
const add = function(a, b) { return a + b; }
console.log(reduce(nums, add, 0)); // should log 8
