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
    if(typeof document !== 'undefined'){
      import('inputmask').then(Inputmask => {
        let inputNumberCard = document.getElementById('input-number-card');
        let inputExpirationDate = document.getElementById('input-expiration-date');
        let inputSecurityCode = document.getElementById('input-security-code');

        if (inputNumberCard) {
          let mask = new Inputmask.default({
            mask: "9999 9999 9999 9999",
            placeholder: " ",
            insertMode: true,
            showMaskOnHover: false,
            showMaskOnFocus: false
          });
          mask.mask(inputNumberCard);
        }

        if (inputExpirationDate) {
          let mask = new Inputmask.default({
            mask: "99/99",
            placeholder: " ",
            insertMode: true,  // Ensure the mask does not insert mode to avoid jumping characters
            showMaskOnHover: false,
            showMaskOnFocus: false
          });
          mask.mask(inputExpirationDate);
        }

        if (inputSecurityCode) {
          let mask = new Inputmask.default({
            mask: "9999",
            placeholder: " ",
            insertMode: true,
            showMaskOnHover: false,
            showMaskOnFocus: false
          });
          mask.mask(inputSecurityCode);
        }
      });
    }
  }

  onFocusInputs(input: HTMLInputElement){
    input.style.border = "2px solid #0075ff";
  }

  onBlurInputs(input: HTMLInputElement){
    input.style.border = "none";
  }
}
