const largestRectangleArea = (heights: number[]): number => {
  const stack: number[] = [];
  let maxArea = 0;
  let index = 0;

  while (index < heights.length) {
    if (
      stack.length === 0 ||
      heights[index]! >= heights[stack[stack.length - 1]!]!
    ) {
      stack.push(index);
      index++;
    } else {
      const top = stack.pop()!;
      const height = heights[top]!;
      const width =
        stack.length === 0 ? index : index - stack[stack.length - 1]! - 1;
      maxArea = Math.max(maxArea, height * width);
    }
  }

  while (stack.length > 0) {
    const top = stack.pop()!;
    const height = heights[top]!;
    const width =
      stack.length === 0
        ? heights.length
        : heights.length - stack[stack.length - 1]! - 1;
    maxArea = Math.max(maxArea, height * width);
  }

  return maxArea;
};

const maximalRectangle = (mat: number[][]): number => {
  const heights = new Array(mat[0]!.length).fill(0);
  let maxArea = 0;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0]!.length; j++) {
      if (mat[i]![j] == 1) {
        heights[j] += 1;
      }
      if (mat[i]![j] == 0) {
        heights[j] = 0;
      }
    }
    maxArea = Math.max(maxArea, largestRectangleArea(heights));
  }

  return maxArea;
};
