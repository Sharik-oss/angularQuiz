import { Component, OnInit, NgModule, signal, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import questions from "../json/questions.json"
import { InfoModal } from '../info-modal/info-modal.component';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-questionaire',
  standalone: true,
  imports: [CommonModule, InfoModal, ModalComponent],
  templateUrl: './questionaire.component.html',
  styleUrl: './questionaire.component.scss'
})

export class QuestionaireComponent implements OnInit{
  clicked = false;
  fiftyFiftyClicked = false;
  usersHelpClicked = false;

  title : string = "სამწუხაროდ თქვენ დამარცხდით"
  @Output() buttonText: string = ""
  description: string = "თქვენი გარანტირებული თანხა შეადგენს  ლარს";
  @Output()  gameOver: boolean = false;

  @Output() score = 0;
  @Output() correctPercentage = 0;
  allPercentages:number[] = [];
  isCorrect!:boolean;
  correct = "green";
  incorrect = "red";
  
  selectedAnswerIndex!:number
  @Output() isOpenInfoModalOpen:boolean = false
  @Output() isOpenPercentage: boolean = false
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
  indexOfAnswer : number = 0
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
  getUserHelp() {
    this.usersHelpClicked = true
    // Calculate the total number of answers
    const totalAnswersCount = this.question.questionanswers[this.indexOfAnswer].length;

    // Generate random percentages for each answer
    for (let i = 0; i < totalAnswersCount - 1; i++) {
        const randomPercentage = Math.floor(Math.random() * (100 - this.allPercentages.reduce((acc, curr) => acc + curr, 0)));
        this.allPercentages.push(randomPercentage);
    }

    // Calculate the sum of generated percentages
    const sumOfOtherPercentages = this.allPercentages.reduce((acc, curr) => acc + curr, 0);

    // Calculate the last percentage to ensure the sum equals 100
    const lastPercentage = 100 - sumOfOtherPercentages;
    this.allPercentages.push(lastPercentage);

    this.isOpenPercentage = true;    
}




  onPopupClose(event:boolean){
    console.log('parent over',this.gameOver)
    this.isOpenInfoModalOpen = event
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
        this.isOpenInfoModalOpen = true
        
        this.score = 200;
        this.title = "გილოცავთ"
        this.description = `თქვენი გარანტირებული თანხა არის ${this.score} ლარი`
        this.buttonText = "მადლობა"
        this.gameOver = false;
        console.log(this.buttonText);
        
        
      }
      if(this.indexOfAnswer === 10){
        this.isOpenInfoModalOpen = true
        this.score = 3000;
        this.title = "გილოცავთ"
        this.description = `თქვენი გარანტირებული თანხა არის ${this.score} ლარი`
        this.buttonText = "მადლობა"
        this.gameOver = false;
        
      }
      if(this.indexOfAnswer === 14){
        this.isOpenInfoModalOpen = true
        this.score = 20000;
        this.title = "გილოცავთ"
        this.description = `თქვენი გარანტირებული თანხა არის ${this.score} ლარი`
        this.buttonText = "მადლობა"
        this.gameOver = false;
      }
    }else{
      let audio = new Audio();
      audio.src = '../assets/sagol yleo.m4a'
      audio.load()
      audio.play()
      this.gameOver = true;
      this.title = "სამწუხაროდ თქვენ დამარცხდით"
      this.description = `თქვენ შეძელით ${this.score} ლარის დაგროვება`
      this.buttonText = "თავიდან დაწყება"
      this.isCorrect = false;
      const timeline = setTimeout(()=>{
        console.log(23);
        this.isIncorrect.set(true)
      },1000)
      setTimeout(()=> {
        this.isOpenInfoModalOpen = true;
      }, 2000);
    }
  }

}
  
