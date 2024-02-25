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
    console.log(this.question.questionanswers);
  }


  checkAnswer(option: string){
    if(option === this.question.answer){
      this.i++;
      this.question = questions[this.i]
      console.log(this.i);
      if(this.i < 20){
        console.log("I'm done");
        
      }
      console.log(true);
    }else{
      console.log(false);
      
    }
    
  }

}
  
