import { Component, OnInit, NgModule } from '@angular/core';
import { question } from '../questionaire';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-questionaire',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './questionaire.component.html',
  styleUrl: './questionaire.component.scss'
})
export class QuestionaireComponent{

  questions : question[] = [
    {
      questionText: "vin var me?",
      questionAnswer1: "mamuka",
      questionAnswer2: "irakli",
      questionAnswer3: "tornike",
      questionAnswer4: "lasha"
    },
    {
      questionText: "vin var me?",
      questionAnswer1: "mamuka",
      questionAnswer2: "irakli",
      questionAnswer3: "tornike",
      questionAnswer4: "lasha"
    },
    {
      questionText: "vin var me?",
      questionAnswer1: "mamuka",
      questionAnswer2: "irakli",
      questionAnswer3: "tornike",
      questionAnswer4: "lasha"
    },
    {
      questionText: "vin var me?",
      questionAnswer1: "mamuka",
      questionAnswer2: "irakli",
      questionAnswer3: "tornike",
      questionAnswer4: "lasha"
    },
    {
      questionText: "vin var me?",
      questionAnswer1: "mamuka",
      questionAnswer2: "irakli",
      questionAnswer3: "tornike",
      questionAnswer4: "lasha"
    }    
  ]

}
  
