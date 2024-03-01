import { Component, OnInit, NgModule, signal, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import questions from "../json/questions.json"
import { forEach } from 'cypress/types/lodash';
import { GameoverComponent } from '../gameover/gameover.component';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-questionaire',
  standalone: true,
  imports: [CommonModule, GameoverComponent, ModalComponent],
  templateUrl: './questionaire.component.html',
  styleUrl: './questionaire.component.scss'
})

export class QuestionaireComponent implements OnInit{
  clicked = false;
  fiftyFiftyClicked = false;
  usersHelpClicked = false;
  @Output() score = 0;
  @Output() correctPercentage = 0;
  @Output() otherPercentages = "";
  isCorrect!:boolean;
  correct = "green";
  incorrect = "red";
  selectedAnswerIndex!:number
  isOpenGameOver:boolean = false
  @Input() isOpenPercentage: boolean = false
  amounts = [
    20000,
    10000,
    5000,
    4000,
    3000,
    1500,
    1000,
    800,
    400,
    200,
    100,
    50,
    40,
    30,
    20
  ]
  @Output() indexOfAnswer : number = 0
  question : any = questions[this.indexOfAnswer];
  buttonClass : string = '';

  isIncorrect = signal(false)
  selectedAnswer = signal('')


  ngOnInit(): void {
    console.log(this.question);
    console.log(this.question.questionanswers);
  }
  getHelpFiftyFifty(){
    this.fiftyFiftyClicked = true;

    const correctAnswerIndex = this.question.questionanswers.indexOf(this.question.answer)
    let disableIndex = Math.floor(Math.random() * this.question.questionanswers.length);

    while (disableIndex === correctAnswerIndex) {
      disableIndex = Math.floor(Math.random() * this.question.questionanswers.length);
    }

    for(let i = 0; i < this.question.questionanswers.length; i++){
      if(i !== correctAnswerIndex && i !== disableIndex){
        document.getElementsByClassName('answer')[i].setAttribute('disabled', 'true');
      }
    }
  }
  getUserHelp(){
    const correctPercentage = Math.floor(Math.random() * 100);

    // Display the random percentage for correct answer
    console.log(`Random percentage for correct answer: ${correctPercentage}%`);

    // Calculate the total number of answers
    const totalAnswersCount = this.question.questionanswers.length;

    // Initialize an array to store the percentages for other answers
    const otherPercentages: number[] = [];

    // Generate random percentages for other answers
    let remainingPercentage = 100 - correctPercentage;
    for (let i = 0; i < totalAnswersCount - 1; i++) {
        const randomPercentage = Math.floor(Math.random() * remainingPercentage);
        otherPercentages.push(randomPercentage);
        remainingPercentage -= randomPercentage;
    }

    // Ensure the sum of percentages is exactly 100%
    const sumOfOtherPercentages = otherPercentages.reduce((acc, curr) => acc + curr, 0);
    otherPercentages.push(correctPercentage + + sumOfOtherPercentages);
    this.isOpenPercentage = true
    
    
  }



  checkAnswer(option: string, $event: MouseEvent){
    console.log(option);
    this.clicked = true;
    this.selectedAnswer.set(option)
    this.clicked = true
    if(option === this.question.answer){
      this.isIncorrect.set(false)
      this.isCorrect = true;
      let audio = new Audio();
      audio.src = '../assets/anime-ahh.mp3'
      audio.load()
      audio.play()
      const timeline = setTimeout(()=>{
       
        this.clicked = false
      },1000)
      setTimeout(() => {
        this.indexOfAnswer++;
        this.question = questions[this.indexOfAnswer]
        this.isCorrect = false;
      }, 1000)
      if(this.indexOfAnswer === 5){
        console.log("You have 200 lari");
        this.score = 200;
      }
      if(this.indexOfAnswer === 10){
        console.log("You have 3 000 lari");
        this.score = 3000;
        
      }
      if(this.indexOfAnswer === 14){
        console.log("You have 20 000 lari");
        this.score = 20000;
      }
    }else{
      let audio = new Audio();
      audio.src = '../assets/sagol yleo.m4a'
      audio.load()
      audio.play()
      this.isCorrect = false;
      const timeline = setTimeout(()=>{
        console.log(23);
        this.isIncorrect.set(true)
      },1000)
      setTimeout(()=> {
        this.isOpenGameOver = true;
      }, 2000);
    }
  }

}
  
