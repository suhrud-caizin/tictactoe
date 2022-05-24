import { Injectable } from '@angular/core';

@Injectable(
)
export class boardService {
 
  board: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
   
  ];
  private player = 'X';

  get CurrentTurn(): string {
    return this.player;
  }

  toggle() {
    this.player = this.player == 'O' ? 'X' : 'O';
    console.log(this.player+"**")
  }
  tileClicked(i:number,j:number){
    console.log(this.board[i][j]+"**************");
    this.board[i][j]=this.CurrentTurn;
    console.log(this.board[i][j]+"**************");
      this.toggle();
      setTimeout(() => {
        this.checkMatchFinished();
      }, 0);
  }
  checkMatchFinished() {
    let gameFinished = false;
    let player: string="";
    for (let i = 0; i < 3; i++) {
      if (
        this.board[i][0] == this.board[i][1] &&
        this.board[i][1] == this.board[i][2]
      ) {
        gameFinished = true;
        player = this.board[i][0];
        break;
      }

      if (
        this.board[0][i] == this.board[1][i] &&
        this.board[1][i] == this.board[2][i]
      ) {
        gameFinished = true;
        player = this.board[0][i];
        break;
      }
    }
    if (
      this.board[0][0] == this.board[1][1] &&
      this.board[1][1] == this.board[2][2]
    ) {
      gameFinished = true;
      player = this.board[0][0];
    }

    if (
      this.board[2][0] == this.board[1][1] &&
      this.board[1][1] == this.board[0][2]
    ) {
      gameFinished = true;
      player = this.board[1][1];
    }

    if (gameFinished && player != '') {
      alert(`Game Finished, ${player} Won`);
    }
  }
 
}