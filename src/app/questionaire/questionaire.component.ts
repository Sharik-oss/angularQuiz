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
      id: 1
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
      id: 2
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
      id: 3
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
      id: 5
    }    
  ]
  score: any = 0;


  checkAnswer(event: Event, answer: string,index: number){
    console.log(event, answer, this.questions[0].answer, index );
    if(answer === this.questions[index].answer){
      console.log(true);
    }else{
      console.log(false);      
    }
  }

}
  
