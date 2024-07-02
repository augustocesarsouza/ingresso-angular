import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-seats',
  templateUrl: './header-seats.component.html',
  styleUrl: './header-seats.component.scss'
})
export class HeaderSeatsComponent {
  constructor(private router: Router){
  }

  onClickIngressoImg(){
    this.router.navigate(['/']);
  }
}
