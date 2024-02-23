import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent implements OnInit {
  @Input() control: FormControl = new FormControl();
  @Input() type = "text"
  @Input() placeholder = ""

  constructor(){

  }


  ngOnInit(): void {
  
  }
}
