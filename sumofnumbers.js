/**
 * E26.
 * Created by danli on 2/5/2017.
 */

const test = [1, 2, 3];

function sumFor(nums) {
    let sum = 0;
    for (const num of nums) {
        sum += num;
    }
    return sum;
}

console.log(sumFor(test));


function sumWhile(nums) {
  let sum = 0;
  let i = 0;
  while (i < nums.length) {
    sum += nums[i];
    i++;
  }
  return sum;
}

console.log(sumWhile(test));


function sumRecursion(nums) {
    if(nums.length === 0) {
      return 0;
    }
    return nums[0] + sumRecursion(nums.slice(1, nums.length));
}

console.log(sumRecursion(test));


function sumTheSimpleWay(nums) {
  return _.reduce(nums, function( num1, num2) {return num1 + num2;}, 0);
}

console.log(sumRecursion(test));