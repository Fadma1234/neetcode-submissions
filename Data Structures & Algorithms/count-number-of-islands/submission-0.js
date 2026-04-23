//parametres will be a grid cols rows
//return number of islands no edge cases
//example grid= [
// ['0','1','1','0'],
// ['0','1','1','0'],
// ['0','1','1','0'], 
// ['0','1','1','0']
//] output 1
// make a function with three vriables grid cols and rows and loop through the grid with two loops and a conditional that whenever a 1 is found and surounded by 0s count 1
//use dfs
class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];
        const ROWS = grid.length,
            COLS = grid[0].length;
        let islands = 0;

        const dfs = (r, c) => {
            if (r < 0 || c < 0 || r >= ROWS || c >= COLS || grid[r][c] === '0')
                return;

            grid[r][c] = '0';
            for (const [dr, dc] of directions) {
                dfs(r + dr, c + dc);
            }
        };

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === '1') {
                    dfs(r, c);
                    islands++;
                }
            }
        }

        return islands;
    }
}