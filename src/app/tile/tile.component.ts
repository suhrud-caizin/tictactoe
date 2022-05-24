import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { boardService } from '../board.service';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html'
})
export class TileComponent  {
  @Input() row: number=0;
  @Input() col: number=0;

  @Input() currentPlayer: string ='';
  /**
   *
   */
  constructor(private bs:boardService) {
   
//  this.currentPlayer=bs.CurrentTurn;
    
  }
  // ngOnInit(): void {
  //   this.currentPlayer=this.bs.CurrentTurn;
  // }
 
  mark2(){
    // setTimeout(() => {
    // }, 100);
    
    // this.currentPlayer=this.bs.CurrentTurn;
        this.bs.tileClicked(this.row,this.col);
        console.log('event called'+this.row+this.col+this.currentPlayer);
        // console.log(this.bs.board)
  }

}
