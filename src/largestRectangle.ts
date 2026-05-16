const largestRectangleArea = (heights: number[]): number => {
  const stack: number[] = [];
  let maxArea = 0;
  let index = 0;

  while (index < heights.length) {
    if (
      stack.length == 0 ||
      heights[index]! >= heights[stack[stack.length - 1]!]!
    ) {
      stack.push(index);
      index++;
    } else {
      const top = stack.pop()!;
      const height = heights[top];
      const width =
        stack.length === 0 ? index : index - stack[stack.length - 1]! - 1;
      maxArea = Math.max(maxArea, height! * width);
    }
  }
  // process remaining bars
  while (stack.length > 0) {
    const top = stack.pop()!;
    const height = heights[top];
    const width =
      stack.length === 0 ? index : index - stack[stack.length - 1]! - 1;
    maxArea = Math.max(maxArea, height! * width);
  }

  return maxArea;
};
console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]))