import { Component, EventEmitter, Input } from '@angular/core';
import { CommonModule, Location  } from '@angular/common';
import { Router } from 'express';


@Component({
  standalone: true,
  selector: 'app-gameover',
  templateUrl: './info-modal.component.html',
  styleUrl: './info-modal.component.scss',
  imports: [CommonModule]
})
export class InfoModal {
  @Input() title: string = ""
  @Input() method: string = "";
  @Input() description: string = ""
  @Input() buttonText: string = ""
  @Input() isOpenInfoModalOpen!:boolean;
  @Input() score!: number;
  closePopup = new EventEmitter<boolean>()
  route!: Router;
  
}
