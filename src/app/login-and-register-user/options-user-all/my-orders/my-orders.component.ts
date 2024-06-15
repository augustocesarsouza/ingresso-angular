import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../user-interface/user-date';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrl: './my-orders.component.scss'
})
export class MyOrdersComponent implements OnInit, OnDestroy {
  userDateStorage: User | null = null;
  numberDiv: number = 1;
  containerAllOptionAndYoursOrders!: HTMLElement;

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

    if(typeof document !== "undefined"){
      this.containerAllOptionAndYoursOrders = document.querySelector(".container-all-option-and-yours-orders") as HTMLElement;
    }

    this.onClickWhichDivWasClicked = this.onClickWhichDivWasClicked.bind(this);
  }


  onClickWhichDivWasClicked(numberDiv: number){
    this.numberDiv = numberDiv;

    if (numberDiv === 1) {
      this.router.navigate(['/my-account/my-orders-2']);
    } else if (numberDiv === 3) {
      this.router.navigate(['/my-account/personal-data']);
    } else if (numberDiv === 4) {
      this.router.navigate(['/my-account/payment-methods']);
      this.containerAllOptionAndYoursOrders.style.width = "90%";
    }
  }

  onClickSvgIngresso(){
    this.sendHomePage();
  }

  sendHomePage(){
    this.router.navigate(['/']);
  }

  ngOnDestroy(): void {
    this.userDateStorage = null;
  }
}
