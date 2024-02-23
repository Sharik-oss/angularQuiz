import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputComponent } from '../input/input.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ InputComponent,RouterLink],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  name = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ])
  surname = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ])

  registerForm = new FormGroup({
    name: this.name,
    surname: this.surname
  })

  testing($event: Event){
  
    $event.preventDefault()
  }

}
