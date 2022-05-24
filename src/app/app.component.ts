import { Component, VERSION } from '@angular/core';
import { boardService } from './board.service';
// import { StateService } from './state.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [boardService]
})
export class AppComponent {
  title='ticktoktoe';
  constructor(private bs: boardService) {}
  getBoard():string[][]  {
    console.log(this.bs.board)
    return this.bs.board;
  }
  getCurrentPlayer(i:number,j:number):string{
    return this.bs.board[i][j];
  }
 
  
}
