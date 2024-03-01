import { Component, Input } from '@angular/core';
import questions from "../json/questions.json";
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
  imports: [CommonModule, MatProgressBarModule]
})
export class ModalComponent {
  @Input() otherPercentages = "";
  @Input() indexOfAnswer : number = 0;
  question : any = questions[this.indexOfAnswer];

}
