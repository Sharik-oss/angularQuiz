import { Component, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputComponent } from '../input/input.component';
import { RouterLink } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ InputComponent,RouterLink],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  inSubmission = false;

  name = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ])
  surname = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ])

  @Output() registerForm = new FormGroup({
    name: this.name,
    surname: this.surname
  })

  testing($event: Event){
    if(this.name.value === "" || this.name.value === null || this.surname.value === "" || this.surname.value === null){
      console.log("wait a minute... who are you???");
      
    }else{
      this.inSubmission = true;
    }
    $event.preventDefault()
  }

}
