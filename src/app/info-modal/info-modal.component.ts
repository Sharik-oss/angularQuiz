import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, Location  } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  standalone: true,
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrl: './info-modal.component.scss',
  imports: [CommonModule]
})
export class InfoModal {
  @Input() title: string = "";
  @Input() method: string = "";
  @Input() description: string = "";
  @Input() buttonText: string = "";
  @Input() gameOver!: boolean;
  @Input() score!: number;
  @Output() closePopup = new EventEmitter<boolean>()
  route = new Router()
  constructor(){
    console.log(this.buttonText, " button text");    
  }

  continueGame(){
    this.closePopup.emit(false);
    console.log(this.closePopup);
  }

  restartGame(){
    console.log('am i here ?')
    this.route.navigateByUrl("/");
  }

  handleClick(e:Event){
    e.preventDefault();
    console.log(this.gameOver)
    this.gameOver ? this.restartGame() : this.continueGame()
  }
}
