const helperFunction = (
  img: number[][],
  startRow: number,
  startCol: number,
  originalColor: number,
  newColor: number
): void => {
  // Bounds check
  if (startRow < 0 || startRow >= img.length) return;

  const currentRow = img[startRow];

  // Row and column bounds check
  if (!currentRow || startCol < 0 || startCol >= currentRow.length) return;

  const currentCell = currentRow[startCol];

  // Color check
  if (currentCell !== originalColor) return;

  // Paint the cell
  currentRow[startCol] = newColor;

  // Spread in all 4 directions
  helperFunction(img, startRow - 1, startCol, originalColor, newColor); // up
  helperFunction(img, startRow + 1, startCol, originalColor, newColor); // down
  helperFunction(img, startRow, startCol - 1, originalColor, newColor); // left
  helperFunction(img, startRow, startCol + 1, originalColor, newColor); // right
};

const changeColor = (
  img: number[][],
  sr: number,
  sc: number,
  newColor: number
): number[][] => {
  const startRow = img[sr];
  if (!startRow) return img;

  const originalColor = startRow[sc];
  if (originalColor === undefined) return img;

  // Edge case: same color, nothing to do
  if (originalColor === newColor) return img;

  helperFunction(img, sr, sc, originalColor, newColor);
  return img;
};
console.log(
  changeColor(
    [
      [1, 1, 0, 1],
      [0, 1, 1, 0],
      [1, 0, 1, 1],
    ],
    1,
    2,
    5,
  ),
);

