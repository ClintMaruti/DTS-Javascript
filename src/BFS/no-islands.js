/**
 * LeetCode Question: No. Of Islands
 * ---------------------------------
 *
 * Given a 2D grid matrix map of '1s' (land) and '0's (water), count the number of islands. An island
 * is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You
 * may assume all four edges of the grid are all surrounded by water.
 *
 * Example 1
 * ---------
 * Input:
 * 1 1 1 1 0
 * 1 1 0 1 0
 * 1 1 0 0 0
 * 0 0 0 0 0
 *
 * Output: 1
 *
 * Example 2
 * ---------
 * Input:
 * 1 1 0 0 0
 * 1 1 0 0 0
 * 0 0 1 0 0
 * 0 0 0 1 1
 *
 * Output: 3
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (grid === null || grid.length === 0) return 0;

  let numIslands = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        numIslands += dfs(grid, i, j);
      }
    }
  }
  return numIslands;
};

var dfs = (grid, i, j) => {
  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= grid[i].length ||
    grid[i][j] === "0"
  )
    return 0;

  grid[i][j] = "0";
  dfs(grid, i + 1, j);
  dfs(grid, i - 1, j);
  dfs(grid, i, j + 1);
  dfs(grid, i, j - 1);
  return 1;
};
