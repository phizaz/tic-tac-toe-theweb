class Bot {
  constructor (q_table) {
    // this bot's name is 1
    this.q_table = q_table;
  }

  takeTurn (state) {
    let hashedState = this.hash(state);
    let q_state = this.q_table[hashedState];
    let bestActionIdx = 0;
    for (let i = 0; i < q_state.length; ++i) {
      if (q_state[bestActionIdx] < q_state[i]) {
        bestActionIdx = i;
      }
    }
    let actions = this.actions(state);
    return actions[bestActionIdx];
  }

  actions (state) {
    let actions = [];
    for (let i = 0; i < state.length; ++i) {
      let row = state[i];
      for (let j = 0; j < row.length; ++j) {
        let col = row[j];
        if (col === 0) {
          actions.push([i, j]);
        }
      }
    }
    return actions;
  }

  hash (state) {
    let multiplier = 1;
    let sum = 0;
    for (let row of state) {
      for (let col of row) {
        sum += multiplier * col;
        multiplier *= 3;
      }
    }
    return sum;
  }
}

export default Bot;