const climbStairs = (n: number): number => {
  if (n == 1) return 1;
  if (n == 2) return 2;
  return climbStairs(n - 1) + climbStairs(n - 2);
};
//console.log(climbStairs(6));

const jumpGame = (arr: number[]): boolean => {
  let maxReach = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i > maxReach) return false;
    maxReach = Math.max(maxReach, i + arr[i]!);
    if (maxReach >= arr.length - 1) {
      return true;
    }
  }
  return false;
};
//console.log(jumpGame([2, 3, 1, 1, 4]));

