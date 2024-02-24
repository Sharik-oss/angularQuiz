import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import questions from "../json/questions.json"

@Component({
  selector: 'app-questionaire',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './questionaire.component.html',
  styleUrl: './questionaire.component.scss'
})

export class QuestionaireComponent implements OnInit{
  i : number = 0
  question : any = questions[this.i];
  score: any = 0;
  ngOnInit(): void {
    console.log(this.question);
    
  }


  checkAnswer(event: Event, answer: string,index: number){
    console.log(this.question[0].answer);
    if(answer === this.question[index].answer){
      console.log(true);
    }else{
      console.log(false);      
    }
  }

}
  
