function twoSum(nums: number[], target: number): number[] {
  let result: number[] = [];
  for (let i: number = 0; i < nums.length; i++) {
    for (let j: number = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result = [i, j];
      }
    }
  }
  return result;
}
