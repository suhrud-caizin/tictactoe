import { Component, VERSION } from '@angular/core';
import { boardService } from './board.service';
// import { StateService } from './state.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [boardService],
})
export class AppComponent {
  title='ticktoktoe';
  constructor(private bs: boardService) {}
  get(): boardService {
    return this.bs;
  }
 
  
}
