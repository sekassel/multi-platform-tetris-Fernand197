import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BoardComponent } from './components/board/board.component';
// import { GameEngineLibComponent } from './game-engine-lib.component';


@NgModule({
  declarations: [
    // GameEngineLibComponent,
    BoardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    // GameEngineLibComponent,
    BoardComponent
  ]
})
export class GameEngineLibModule { }
