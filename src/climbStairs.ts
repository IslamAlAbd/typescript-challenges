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

const rodCutting = (n: number, price: number[]): number => {
  if (n === 0) return 0;
  //maxprofit[i] stores the maximum profit you can get from a rod of length i
  const maxProfit = new Array(n + 1).fill(0);
  maxProfit[0] = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      maxProfit[i] = Math.max(maxProfit[i]!, price[j]! + maxProfit[i - j]!);
    }
  }

  return maxProfit[n];
};
//console.log(rodCutting(8, [0, 1, 5, 8, 9, 10, 17, 17, 20]));

