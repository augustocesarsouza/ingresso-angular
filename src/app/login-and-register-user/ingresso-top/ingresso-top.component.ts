import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresso-top',
  templateUrl: './ingresso-top.component.html',
  styleUrl: './ingresso-top.component.scss'
})
export class IngressoTopComponent {

  constructor(private router: Router) {
  }

  onClickRedirectHome(){
    this.router.navigate(['/home']);
  }
}
