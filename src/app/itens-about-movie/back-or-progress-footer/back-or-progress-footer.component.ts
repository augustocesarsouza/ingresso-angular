import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NumberOfTheSeatsClickedService } from '../service/number-of-the-seats-clicked.service';
import { WitchFunctionWasClickedService } from '../service/witch-function-was-clicked.service';
import { TicketsClickedForTheUserPaymentMethodService } from '../service/tickets-clicked-for-the-user-payment-method.service';
import { NumberOfTheTicketsClickedService } from '../service/number-of-the-tickets-clicked.service';
import { PositionType } from '../enum/app.enums-type-of-itens';
import { CanPassToPopcornService } from '../service/can-pass-to-popcorn.service';
import { SeatsService } from '../service/seats.service';
import { OrderSummaryService } from '../service/order-summary.service';
import { TypeOfThePaymentService } from '../service/type-of-the-payment.service';
import { BomboniereService } from '../service-bomboniere/bomboniere.service';
import { FinalPaymentCheckoutMovieService } from '../service/final-payment-checkout-movie.service';

interface ObjProduct {
  id: string;
  quantityProduct: number;
}

interface ObjTicket {
  id: string;
  quantityTicket: number;
}

export interface objBodyCreate {
  userId: string;
  movieId: string;
  cinemaId: string;
  seats: string;
  objTicketDTO: ObjTicket[];
  objProductDTO: ObjProduct[];
}

@Component({
  selector: 'app-back-or-progress-footer',
  templateUrl: './back-or-progress-footer.component.html',
  styleUrl: './back-or-progress-footer.component.scss'
})
export class BackOrProgressFooterComponent implements OnInit, AfterViewInit {
  private subscription: Subscription[] = [];
  items: number[] = [];
  itemsPaymentClicked: number[] = [];
  whatFunctionClicked = 'seats';

  buttonSeats!: HTMLElement;
  buttonBack!: HTMLElement;
  timeoutGetSeatsAny: any;

  mostrarMeuModalProprio = false;
  codeConfirmedForTheUser = false;

  constructor(private number_of_the_seats_clicked_service: NumberOfTheSeatsClickedService, private witch_function_was_clicked_service: WitchFunctionWasClickedService, private tickets_clicked_for_the_user_payment_method_service: TicketsClickedForTheUserPaymentMethodService, private number_of_the_tickets_clicked_service: NumberOfTheTicketsClickedService,
    private can_pass_to_popcorn_service: CanPassToPopcornService, private seatsClickedService: SeatsService, private order_summary_service: OrderSummaryService,
    private type_of_the_payment_service: TypeOfThePaymentService, private bomboniere_service: BomboniereService,
    private final_payment_checkout_movie_service: FinalPaymentCheckoutMovieService
  ){
  }

  ngOnInit(): void {
    if(typeof document === 'undefined') return;

    document.body.style.position = 'relative';
    this.funcionCloseModal = this.funcionCloseModal.bind(this);
    this.funcionaCodeConfirmedForTheUser = this.funcionaCodeConfirmedForTheUser.bind(this);
  }

  ngAfterViewInit(): void {
    if(typeof document === 'undefined') return;

    let buttonSeats = document.querySelector(".button-seats") as HTMLElement;
    let buttonBack = document.querySelector(".button-back") as HTMLElement;

    this.buttonSeats = buttonSeats;
    this.buttonBack = buttonBack;

    this.subscription.push(this.witch_function_was_clicked_service.arrayWhatWasClicked$.subscribe((whatFunctionClicked) => {
      if(whatFunctionClicked.length <= 0) return;

      clearTimeout(this.timeoutGetSeatsAny);

      this.timeoutGetSeatsAny = setTimeout(() => {
        buttonSeats = document.querySelector(".button-seats") as HTMLElement;
      }, 100);

      this.whatFunctionClicked = whatFunctionClicked;

      if(whatFunctionClicked === PositionType.Seats){
        this.can_pass_to_popcorn_service.updateCanPassOnToPorcorn(false);
        this.itemsPaymentClicked = [];
        this.tickets_clicked_for_the_user_payment_method_service.updateNumberOfTheClickSeats([]);
      }

      if(whatFunctionClicked !== PositionType.Seats){
        buttonBack.style.border = "3px solid rgb(152, 170, 236)";
        buttonBack.style.color = "rgb(152, 170, 236)";
        buttonBack.style.cursor = "pointer";
        buttonBack.style.fontWeight = "700";
      }
    }));

    const buttonSeatsMouseEnter = () => {
      if(buttonSeats){
        buttonSeats.style.backgroundImage = "linear-gradient(to right, rgb(206, 165, 0), rgb(206, 110, 0))";
      }
    }

    const buttonSeatsMouseLeave = () => {
      if(buttonSeats){
        buttonSeats.style.backgroundImage = "linear-gradient(to right, rgb(255, 206, 0), rgb(255, 136, 0))";
      }
    }

    this.subscription.push(this.number_of_the_seats_clicked_service.numberOfTheClickSeats$.subscribe((amountSeats) => {
      this.items = Array.from({ length: amountSeats }, (_, i) => i);

      if(this.items.length <= 0){
        if(buttonSeats){
          buttonSeats.style.backgroundColor = "rgb(102, 102, 102)";
          buttonSeats.style.color = "rgb(33, 38, 45)";
          buttonSeats.style.backgroundImage = "none";
          buttonSeats.style.cursor = "not-allowed";

          buttonSeats.removeEventListener("mouseenter", buttonSeatsMouseEnter);
          buttonSeats.removeEventListener("mouseleave", buttonSeatsMouseLeave);
        }
      }else {
        if(buttonSeats){
          buttonSeats.style.backgroundColor = "rgb(152, 170, 236)";
          buttonSeats.style.color = "rgb(33, 38, 45)";
          buttonSeats.style.backgroundImage = "linear-gradient(to right, rgb(255, 206, 0), rgb(255, 136, 0))";
          buttonSeats.style.cursor = "pointer";

          buttonSeats.addEventListener("mouseenter", buttonSeatsMouseEnter);
          buttonSeats.addEventListener("mouseleave", buttonSeatsMouseLeave);
        }
      }
    }));

    this.subscription.push(this.number_of_the_tickets_clicked_service.numberOfTheClickTickets$.subscribe((ticketsClickedArray) => {
      this.itemsPaymentClicked = ticketsClickedArray;
    }));
  }

  onClickSeats(){
    if(this.items.length <= 0) return;

    this.witch_function_was_clicked_service.updateWhatWasClicked(PositionType.Tickets);
  }

  onClickGoToPopcorn(){
    if(this.can_pass_to_popcorn_service.currentCanPassOnToPorcorn){
      this.witch_function_was_clicked_service.updateWhatWasClicked(PositionType.Popcorn);
    }
  }

  onClickGoToPayment(){
    let userLocalStorage = localStorage.getItem("userLogin");

    if(userLocalStorage !== "null"){
      this.witch_function_was_clicked_service.updateWhatWasClicked(PositionType.Payment);
    }else {
      this.mostrarMeuModalProprio = true;
    }
  }

  onClickBack(){
    if(this.whatFunctionClicked === PositionType.Tickets){
      this.witch_function_was_clicked_service.updateWhatWasClicked(PositionType.Seats);
    }else if(this.whatFunctionClicked === PositionType.Popcorn){
      this.witch_function_was_clicked_service.updateWhatWasClicked(PositionType.Tickets);
    }else if(this.whatFunctionClicked === PositionType.Payment){
      this.witch_function_was_clicked_service.updateWhatWasClicked(PositionType.Popcorn);
    }
  }

  funcionCloseModal(){
    this.mostrarMeuModalProprio = false;
  }

  funcionaCodeConfirmedForTheUser = (value: boolean) => {
    this.codeConfirmedForTheUser = value;
  }

  onClickPay(){
    // console.log(this.order_summary_service.currentOrderSummary);
    if(this.order_summary_service.currentOrderSummary === null) return;

    let userLocalStorage = localStorage.getItem("userLogin");

    if(userLocalStorage === null) return;

    let user: any = JSON.parse(userLocalStorage);

    let userId: string = user.id;
    let movieId = this.order_summary_service.currentOrderSummary.movieId;
    let cinemaId = this.order_summary_service.currentOrderSummary.cinemaDTO.id;

    let seats = this.seatsClickedService.currentSeats.join(', ');

    let allTickets = this.type_of_the_payment_service.currentItens;
    // mandar esse 'allTickets' para o backend, lá ele vai tratar vai pegar "id" e a "quantity" e salvar na "tabela"
    let allTicket: ObjTicket[] = [];

    allTickets.forEach((ticket) => {
      if(!allTicket.some((el) => el.id === ticket.id)){
        let ticketNew = {
          id: ticket.id,
          quantityTicket: ticket.quantityClicked,
        }

        allTicket.push(ticketNew);
      }
    });

    let allProducts = this.bomboniere_service.currentProducts;
    let allProcut: ObjProduct[] = [];

    allProducts.forEach((product) => {
      if(!allProcut.some((el) => el.id === product.id)){
        let productNew = {
          id: product.id,
          quantityProduct: product.quanityClicked,
        }

        allProcut.push(productNew);
      }
    });

    let objBodyCreate: objBodyCreate = {
      userId: userId,
      movieId: movieId,
      cinemaId: cinemaId,
      seats: seats,
      objTicketDTO: allTicket,
      objProductDTO: allProcut,
    };

    this.final_payment_checkout_movie_service.createFinalPaymentCheckoutMovie(objBodyCreate).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.error(error);
      }
    });

    // pegar esse "allProcut" e mandar para o backend, lá ele vai tratar vai pegar "id" e a "quantity" e salvar na "tabela"

    // criar um objeto que manda para o backend nessa tabela que tem que criar ainda no BACKEND "tb_final_payment_checkout_movie"
    // TEM QUE CRIAR AS CLASS NO BAKCEND AINDA
  }
}
