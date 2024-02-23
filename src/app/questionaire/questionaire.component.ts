import { Component, OnInit, NgModule } from '@angular/core';
import { questionsInterface } from '../questionaire';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-questionaire',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './questionaire.component.html',
  styleUrl: './questionaire.component.scss'
})
export class QuestionaireComponent{

  questions : questionsInterface[] = [
    {
      questionText: "vin var me?",
      questionAnswers: [
        "mamuka",
        "tornike",
        "irakli",
        "giorgi"
      ],
      answer: "tornike",
      id: 4
    },
    {
      questionText: "vin var me?",
      questionAnswers: [
        "mamuka",
        "tornike",
        "irakli",
        "giorgi"
      ],
      answer: "mamuka",
      id: 4
    },
    {
      questionText: "vin var me?",
      questionAnswers: [
        "mamuka",
        "tornike",
        "irakli",
        "giorgi"
      ],
      answer: "giorgi",
      id: 4
    },
    {
      questionText: "vin var me?",
      questionAnswers: [
        "mamuka",
        "tornike",
        "irakli",
        "giorgi"
      ],
      answer: "tornike",
      id: 4
    }, 
    {
      questionText: "vin var me?",
      questionAnswers: [
        "mamuka",
        "tornike",
        "irakli",
        "giorgi"
      ],
      answer: "mamuka",
      id: 4
    }    
  ]
  score: any = 0;


  checkAnswer($event: Event, answer: any){
    if(answer === this.questions[0].answer){
      console.log(true);
    }else{
      console.log(false);      
    }
  }

}
  
