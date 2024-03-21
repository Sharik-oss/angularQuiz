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
  fiftyUsed!:any;

  title : string = "სამწუხაროდ თქვენ დამარცხდით"
  @Output() buttonText: string = ""
  description: string = "თქვენი გარანტირებული თანხა შეადგენს  ლარს";
  @Output()  gameOver: boolean = false;
  savedScore: number = 0;

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
  disableIndex: number = 0;
  disabledIndexes: number[] = [];
  isIncorrect = signal(false)
  selectedAnswer = signal('')


 
  getHelpFiftyFifty(){
    this.fiftyFiftyClicked = true;
    localStorage.setItem('fiftyfiftyUsed', JSON.stringify(this.fiftyFiftyClicked));

    const correctAnswerIndex = this.question.questionanswers.indexOf(this.question.answer)
    let disableIndex = Math.floor(Math.random() * this.question.questionanswers.length);

    while (disableIndex === correctAnswerIndex) {
      disableIndex = Math.floor(Math.random() * this.question.questionanswers.length);
    }
    for(let i = 0; i < this.question.questionanswers.length; i++){
      if(i !== correctAnswerIndex && i !== disableIndex){
        document.getElementsByClassName('answer')[i].setAttribute('disabled', 'true');
        this.disabledIndexes.push(i);
        
      }
    }
  }
  getUserHelp() {
    this.usersHelpClicked = true
    
    
    localStorage.setItem('userHelp', JSON.stringify(this.usersHelpClicked))
    // Calculate the total number of answers
    if(this.fiftyFiftyClicked === true){
      const totalAnswersCount = this.question.questionanswers.length;

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
      // for(let i = 0; i < this.disabledIndexes.length; i++){
      //   console.log(this.disabledIndexes[i])
       
      // }
      console.log(this.allPercentages);
      
    }else{
      const totalAnswersCount = this.question.questionanswers.length;

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
      console.log(this.allPercentages);
    }
    this.isOpenPercentage = true;    
    
}




  onPopupClose(event:boolean){
    this.isOpenInfoModalOpen = event
  }

  checkAnswer(option: string, $event: MouseEvent){
    this.clicked = true;
    this.selectedAnswer.set(option)
    localStorage.setItem('user-score', JSON.stringify(this.score))
    console.log(this.question)
    if(option === this.question.answer){
      this.isIncorrect.set(false)
      this.isCorrect = true;
      const timeline = setTimeout(()=>{
       
        this.clicked = false
      },1000)
      setTimeout(() => {
        this.indexOfAnswer++;
        localStorage.setItem('user-level', JSON.stringify(this.indexOfAnswer))
        this.question = questions[this.indexOfAnswer]
        this.isCorrect = false;
      }, 1000)
      if(this.indexOfAnswer === 5){
        this.isOpenInfoModalOpen = true      
        this.score = 200;
        localStorage.setItem('user-score', JSON.stringify(this.score))
        this.title = `გილოცავთ ${localStorage.getItem('user-name')}`;
        this.description = `თქვენი გარანტირებული თანხა არის ${this.score} ლარი`
        this.buttonText = "მადლობა"
        this.gameOver = false;
        console.log(this.buttonText);
        
        
      }
      if(this.indexOfAnswer === 10){
        this.isOpenInfoModalOpen = true
        this.score = 3000;
        localStorage.setItem('user-score', JSON.stringify(this.score))
        this.title = `გილოცავთ ${localStorage.getItem('user-name')}`;
        this.description = `თქვენი გარანტირებული თანხა არის ${this.score} ლარი`
        this.buttonText = "მადლობა"
        this.gameOver = false;
        
      }
      if(this.indexOfAnswer === 14){
        this.isOpenInfoModalOpen = true
        this.score = 20000;
        localStorage.setItem('user-score', JSON.stringify(this.score))
        this.title = `გილოცავთ ${localStorage.getItem('user-name')}`;
        this.description = `თქვენ მოიგეთ ${this.score} ლარი :)`
        this.buttonText = "მადლობა"
        this.gameOver = true;
        this.indexOfAnswer = 0;
      }
      
      
    }else{
      this.gameOver = true;
      this.title = `სამწუხაროდ ${localStorage.getItem('user-name')} თქვენ დამარცხდით`;
      this.description = `თქვენ შეძელით ${localStorage.getItem('user-score')} ლარის დაგროვება`
      this.buttonText = "თავიდან დაწყება"
      this.isCorrect = false;
      this.indexOfAnswer = 0;
      localStorage.setItem('user-level', this.indexOfAnswer.toString())
      const timeline = setTimeout(()=>{
        console.log(23);
        this.isIncorrect.set(true)
      },1000)
      setTimeout(()=> {
        this.isOpenInfoModalOpen = true;
      }, 2000);
    }
  }

  ngOnInit() {
    if(localStorage.getItem('fiftyfiftyUsed') == "true"){
      this.fiftyFiftyClicked = true
    }else{
      this.fiftyFiftyClicked = false;
    }
    this.indexOfAnswer = Number(localStorage.getItem('user-level'))
    this.question = questions[this.indexOfAnswer]

    if(localStorage.getItem('userHelp') == "true" ){
      this.usersHelpClicked = true
    }else{
      this.usersHelpClicked = false
    }

  }

}
  
