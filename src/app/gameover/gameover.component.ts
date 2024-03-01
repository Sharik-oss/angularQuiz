import { Component, EventEmitter, Input } from '@angular/core';
import { Location  } from '@angular/common';
import { Router } from 'express';


@Component({
  standalone: true,
  selector: 'app-gameover',
  templateUrl: './gameover.component.html',
  styleUrl: './gameover.component.css'
})
export class GameoverComponent {
  @Input() score!: number;
  closePopup = new EventEmitter<boolean>()
  route!: Router;
  restartGame(){
    this.route.route("/");
  }
}
