import { Component, EventEmitter, Input, Output } from '@angular/core';
import questions from "../json/questions.json";
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';



@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  imports: [CommonModule, MatProgressBarModule, MatIconModule]
})
export class ModalComponent {
  @Input() otherPercentages:number[] = [];
  @Input() isActive!:boolean;
  @Input() indexOfAnswer : number = 0;
  @Output() closePopup = new EventEmitter<boolean>()
  @Input() question:any = [];
  constructor(){
    // console.log(this.otherPercentages)
  }
  closeModal($event: Event){
    $event.preventDefault()
    this.isActive = false;
    this.closePopup.emit()
  }

}
