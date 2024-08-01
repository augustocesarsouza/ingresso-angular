import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-about-card',
  templateUrl: './info-about-card.component.html',
  styleUrl: './info-about-card.component.scss'
})
export class InfoAboutCardComponent implements OnInit {
  constructor(){
  }

  ngOnInit(): void {
  }

  onFocusInputs(input: HTMLInputElement){
    input.style.border = "2px solid #0075ff";
  }

  onBlurInputs(input: HTMLInputElement){
    input.style.border = "none";
  }
}
