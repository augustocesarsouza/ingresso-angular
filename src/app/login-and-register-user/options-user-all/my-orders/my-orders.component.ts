import { Component, OnInit } from '@angular/core';
import { User } from '../../user-interface/user-date';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrl: './my-orders.component.scss'
})
export class MyOrdersComponent implements OnInit {
  userDateStorage: User | null = null;
  numberDiv: number = 1;

  constructor(private router: Router){
  }

  ngOnInit(): void {
    let userDateStorage = null;

    if(typeof window !== "undefined"){
      userDateStorage = localStorage.getItem("userLogin");
    }

    if(userDateStorage && typeof userDateStorage === "string"){
      userDateStorage = JSON.parse(userDateStorage);
      this.userDateStorage = userDateStorage;
    }

    this.onClickWhichDivWasClicked = this.onClickWhichDivWasClicked.bind(this);
  }


  onClickWhichDivWasClicked(numberDiv: number){
    this.numberDiv = numberDiv;
  }

  onClickSvgIngresso(){
    this.router.navigate(['/']);
  }
}
