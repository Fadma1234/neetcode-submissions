class Solution {
  /**
   * @param {character[][]} board
   * @return {boolean}
   */
  isValidSudoku(board) {
    const rows = [], cols = [], boxes = [];
    for (let i = 0; i < 9; i++) {
      rows[i] = new Set();
      cols[i] = new Set();
      boxes[i] = new Set();
    }

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        const val = board[i][j];
        if (val === ".") continue;

        const box = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        if (rows[i].has(val) || cols[j].has(val) || boxes[box].has(val)) return false;

        rows[i].add(val);
        cols[j].add(val);
        boxes[box].add(val);
      }
    }

    return true;
  }
}