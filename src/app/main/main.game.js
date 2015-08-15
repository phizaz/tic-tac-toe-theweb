class Game {
  constructor (startPlayer = 0) {
    // create a table
    this.table = Array.apply(null, Array(3))
      .map(() => {
        return Array.apply(null, Array(3))
          .map(() => { return 0; });
      });
    this.turn = 0;
    this.isFinished = false;
    this.winner = null;
    this.currentPlayer = startPlayer;
  }

  move (action) {
    this.turn += 1;
    this.table[action[0]][action[1]] = this.currentPlayer;
    this.currentPlayer = this.currentPlayer % 2 + 1;
    // return the game status, and the winner
    [this.isFinished, this.winner] = this.IsFinished();
  }

  IsFinished () {
    function isSame(row) {
      return row[0] !== 0 && row[0] === row[1] && row[1] === row[2];
    }

    let list = [];
    for (let row of this.table) {
      list.push(row);
    }

    for (let j = 0; j < this.table[0].length; ++j) {
      let col = [];
      for (let i = 0; i < this.table.length; ++i) {
        col.push(this.table[i][j]);
      }
      list.push(col);
    }

    let diag_left = [];
    let diag_right = [];
    for (let i = 0; i < this.table.length; ++i) {
      diag_left.push(this.table[i][i]);
      diag_right.push(this.table[i][this.table.length - i - 1]);
    }
    list.push(diag_right);
    list.push(diag_left);

    for (let each of list) {
      if (isSame(each)) {
        // there is a winner
        return [true, each[0]];
      }
    }

    // check if the game is finshed ?
    for (let row of this.table) {
      for (let col of row) {
        if (col === 0) {
          // there is no winner , and the game is not finished
          return [false, null];
        }
      }
    }
    // there is no winner, but the game is finished
    return [true, null];
  }
}

export default Game;