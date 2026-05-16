# typescript-challenges
A collection of 7 Data Structures & Algorithms problems solved in TypeScript, covering key concepts like Dynamic Programming, Two Pointers, Stack-based approaches, and Graph Traversal.

---

## Problems Solved

### Problem 1 — Flood Fill
**Description:** Given a 2D image grid, perform a flood fill starting from a given pixel `(sr, sc)` and replace all connected pixels of the same color with a new color.

- **Approach:** Depth First Search (DFS) / Recursion
- **Time Complexity:** O(m × n) — visits each pixel at most once
- **Space Complexity:** O(m × n) — recursion stack in worst case

---

### Problem 2 — Trapping Rainwater
**Description:** Given an array of bar heights, determine the total amount of water that can be trapped between the bars after it rains.

- **Approach:** Two Pointers — track `maxLeft` and `maxRight` as we move inward
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

---

### Problem 3 — Climb Stairs
**Description:** Given `n` stairs, count the number of ways a person can reach the top by climbing 1 or 2 stairs at a time.

- **Approach:** Dynamic Programming (Bottom Up)
- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

---

### Problem 4 — Jump Game
**Description:** Given an array where each element represents the maximum jump length from that index, determine if you can reach the last index from the first.

- **Approach:** Greedy — track the maximum reachable index at each step
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

---

### Problem 5 — Rod Cutting
**Description:** Given a rod of length `n` and a price array, determine the maximum profit obtainable by cutting the rod into pieces and selling them.

- **Approach:** Dynamic Programming (Bottom Up) — for each length, try all possible first cuts
- **Time Complexity:** O(n²)
- **Space Complexity:** O(n)

---

### Problem 6 — Largest Rectangle in Histogram
**Description:** Given an array of bar heights, find the largest rectangular area that can be formed using contiguous bars.

- **Approach:** Monotonic Stack — track indices of increasing heights
- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

---

### Problem 7 — Maximal Rectangle in Binary Matrix
**Description:** Given a 2D binary matrix of 0s and 1s, find the area of the largest rectangle containing only 1s.

- **Approach:** Build histogram row by row, then apply Largest Rectangle in Histogram (Problem 6) on each row
- **Time Complexity:** O(m × n)
- **Space Complexity:** O(n)

---

## Key Concepts Practiced

- **Dynamic Programming** — Rod Cutting, Climb Stairs
- **Two Pointers** — Trapping Rainwater
- **Greedy** — Jump Game
- **Monotonic Stack** — Largest Rectangle in Histogram
- **DFS / Recursion** — Flood Fill
- **Matrix Traversal** — Maximal Rectangle, Flood Fill

---

## How to Run

Make sure you have Node.js and TypeScript installed.

```bash
# Install dependencies
npm install

# Compile and run a specific file
tsc && node ./dist/fileName.js
```

Or use the npm scripts if configured:

```bash
npm run scriptname   # compiles and runs
```
