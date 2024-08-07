import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeOfThePaymentComponent } from './type-of-the-payment/type-of-the-payment.component';
import { OnlySeatsComponent } from './only-seats/only-seats.component';
import { BomboniereComponent } from './bomboniere/bomboniere.component';
import { BodyChooseSeatsComponent } from './body-choose-seats/body-choose-seats.component';
import { PaymentTypeComponent } from './payment/payment-type/payment-type.component';

const routes: Routes = [

  { path: '', component: BodyChooseSeatsComponent,
    children: [
      { path: 'seats', component: OnlySeatsComponent },
      { path: 'tickets', component: TypeOfThePaymentComponent },
      { path: 'bomboniere', component: BomboniereComponent },
      { path: 'payment', component: PaymentTypeComponent },
      { path: '', redirectTo: 'seats', pathMatch: 'full' },
      { path: '**', redirectTo: 'seats' }
    ]
   },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItensAboutMovieRoutingModule { }
