import Game from './main.game.js';
import Bot from './main.bot.js';

class MainController {
  constructor ($scope, $http) {

    this.game = null;
    this.bot = null;
    // human starts first
    this.startPlayer = null;

    this.humanMove = (row, col) => {
      // cannot move if the game is finished
      if (this.game.isFinished) {
        return ;
      }
      // cannot do this action
      if (this.game.table[row][col] !== 0) {
        return ;
      }

      this.game.move([row, col]);
      if (!this.game.isFinished) {
        // computer moves
        this.botMove();
      }
    };

    $http.get('/assets/BotRLBetterDiscovery-0.1-90000.json')
      .then((res) => {
        let json = angular.fromJson(res.data);
        this.bot = new Bot(json);
        // start game
        this.restart();
      });
  }

  restart() {
    if (this.startPlayer === null) {
      // player starts first
      this.startPlayer = 1;
    } else {
      this.startPlayer = this.startPlayer % 2 + 1;
    }
    this.game = new Game(this.startPlayer);
    if (this.startPlayer === 1) {
      this.botMove();
    }
  }

  botMove() {
    // computer moves
    let state = this.game.table;
    let botMove = this.bot.takeTurn(state);
    this.game.move(botMove);
  }
}

export default MainController;
