import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MyAccountService } from '../../services/my-account.service';
import { GetInfoAboutFinalInfoUserId } from '../interface-for-service/my-account-interface/get-info-about-final-info-user-id';
import { GetInfoAboutBayFinal } from '../interface-for-service/my-account-interface/get-info-about-bay-final';

@Component({
  selector: 'app-my-orders-cinema',
  templateUrl: './my-orders-cinema.component.html',
  styleUrl: './my-orders-cinema.component.scss'
})
export class MyOrdersCinemaComponent implements OnInit, AfterViewInit {
  getInfoAboutFinalInfoUserId: GetInfoAboutFinalInfoUserId[] = [];
  getInfoAboutBayFinal!: GetInfoAboutBayFinal[][];

  constructor(private my_account_service: MyAccountService){
  }

  ngOnInit(): void {
    if(typeof document === 'undefined') return;

    let user = localStorage.getItem('userLogin');
    if(user === null) return;

    let userJson = JSON.parse(user);

    document.body.style.background = "#fff";

    this.my_account_service.getFinalPaymentCheckoutGetInfoAboutBayFinalInfoUserId(userJson.id).subscribe({
      next: (data: any) => {
        let array: GetInfoAboutFinalInfoUserId[] = data.data;
        // console.log(array);

        this.getInfoAboutFinalInfoUserId = array;
        console.log(this.getInfoAboutFinalInfoUserId);

      },
      error: (error: any) => {
        console.log(error);
      }
    });

    this.my_account_service.getFinalPaymentCheckoutGetInfoAboutBayFinal(userJson.id).subscribe({
      next: (data: any) => {
        let array: GetInfoAboutBayFinal[][] = data.data;

        this.getInfoAboutBayFinal = array;
        // console.log(this.getInfoAboutBayFinal);

      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  ngAfterViewInit(): void {
  }
}
