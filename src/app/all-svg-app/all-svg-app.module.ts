import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgLocationComponent } from './svg-location/svg-location.component';
import { SvgLoupeComponent } from './svg-loupe/svg-loupe.component';
import { SvgUserComponent } from './svg-user/svg-user.component';
import { SvgLockComponent } from './svg-lock/svg-lock.component';
import { SvgIngressoComponent } from './svg-ingresso/svg-ingresso.component';
import { SvgUserBodyComponent } from './svg-user-body/svg-user-body.component';
import { SvgQuestionMarkComponent } from './svg-question-mark/svg-question-mark.component';
import { SvgTicketsComponent } from './svg-tickets/svg-tickets.component';
import { SvgTicketsTwoComponent } from './svg-tickets-two/svg-tickets-two.component';
import { SvgPersonalDataComponent } from './svg-personal-data/svg-personal-data.component';
import { SvgPaymentMethodsComponent } from './svg-payment-methods/svg-payment-methods.component';
import { SvgIComponent } from './svg-i/svg-i.component';
import { SvgLockPasswordComponent } from './svg-lock-password/svg-lock-password.component';
import { SvgLock2Component } from './svg-lock-2/svg-lock-2.component';
import { SvgFacebookComponent } from './social-media-svg/svg-facebook/svg-facebook.component';
import { SvgYoutubeComponent } from './social-media-svg/svg-youtube/svg-youtube.component';
import { SvgInstagramComponent } from './social-media-svg/svg-instagram/svg-instagram.component';
import { SvgLinckedinComponent } from './social-media-svg/svg-linckedin/svg-linckedin.component';
import { SvgVisaComponent } from './credit-all-svg/svg-visa/svg-visa.component';
import { SvgMastercardComponent } from './credit-all-svg/svg-mastercard/svg-mastercard.component';
import { SvgEloComponent } from './credit-all-svg/svg-elo/svg-elo.component';
import { SvgAuraComponent } from './credit-all-svg/svg-aura/svg-aura.component';
import { SvgAmericanExpressComponent } from './credit-all-svg/svg-american-express/svg-american-express.component';
import { SvgHipercardComponent } from './credit-all-svg/svg-hipercard/svg-hipercard.component';
import { SvgPagbankComponent } from './credit-all-svg/svg-pagbank/svg-pagbank.component';
import { SvgC9Component } from './debit-all-svg/svg-c9/svg-c9.component';
import { SvgNubankComponent } from './debit-all-svg/svg-nubank/svg-nubank.component';
import { SvgItauComponent } from './debit-all-svg/svg-itau/svg-itau.component';
import { SvgBradescoComponent } from './debit-all-svg/svg-bradesco/svg-bradesco.component';
import { SvgNextComponent } from './debit-all-svg/svg-next/svg-next.component';
import { SvgSantanderComponent } from './debit-all-svg/svg-santander/svg-santander.component';
import { SvgCaixaComponent } from './debit-all-svg/svg-caixa/svg-caixa.component';
import { SvgInterComponent } from './debit-all-svg/svg-inter/svg-inter.component';
import { SvgBancoDoBrasilComponent } from './debit-all-svg/svg-banco-do-brasil/svg-banco-do-brasil.component';
import { SvgPaypalComponent } from './other-payments-all-svg/svg-paypal/svg-paypal.component';
import { SvgPayComponent } from './other-payments-all-svg/svg-pay/svg-pay.component';
import { SvgPayGoogleComponent } from './other-payments-all-svg/svg-pay-google/svg-pay-google.component';
import { SvgPixComponent } from './other-payments-all-svg/svg-pix/svg-pix.component';
import { SvgShareComponent } from './svg-share/svg-share.component';
import { SvgLoupeMovieTheaterComponent } from './svg-loupe-movie-theater/svg-loupe-movie-theater.component';
import { SvgHeartComponent } from './svg-heart/svg-heart.component';
import { SvgSeatsComponent } from './svg-seats/svg-seats.component';
import { SvgPriceComponent } from './svg-price/svg-price.component';
import { SvgDetailsComponent } from './svg-details/svg-details.component';
import { SvgExitComponent } from './svg-exit/svg-exit.component';
import { SvgTicketCabinComponent } from './svg-ticket-cabin/svg-ticket-cabin.component';
import { SvgEuaComponent } from './svg-eua/svg-eua.component';
import { SvgTicketsForSeatsComponent } from './all-svg-itens-about-movie/svg-tickets-for-seats/svg-tickets-for-seats.component';
import { SvgPopcornComponent } from './all-svg-itens-about-movie/svg-popcorn/svg-popcorn.component';
import { SvgCardForSeatsComponent } from './all-svg-itens-about-movie/svg-card-for-seats/svg-card-for-seats.component';
import { SvgCalendarComponent } from './all-svg-itens-about-movie/svg-calendar/svg-calendar.component';
import { SvgClockComponent } from './all-svg-itens-about-movie/svg-clock/svg-clock.component';
import { SvgTrashcanComponent } from './all-svg-itens-about-movie/svg-trashcan/svg-trashcan.component';
import { SvgExclamationMarkComponent } from './svg-exclamation-mark/svg-exclamation-mark.component';
import { SvgBodySeatsComponent } from './all-svg-itens-about-movie/svg-body-seats/svg-body-seats.component';
import { SvgBlockedComponent } from './all-svg-itens-about-movie/svg-blocked/svg-blocked.component';
import { SvgWheelchairComponent } from './all-svg-itens-about-movie/svg-wheelchair/svg-wheelchair.component';
import { SvgObeseComponent } from './all-svg-itens-about-movie/svg-obese/svg-obese.component';
import { SvgTicketComponent } from './all-svg-itens-about-movie/svg-ticket/svg-ticket.component';
import { SvgTicketFullComponent } from './all-svg-payment-methods/svg-ticket-full/svg-ticket-full.component';
import { SvgLessForPaymentMethodComponent } from './all-svg-payment-methods/svg-less/svg-less.component';
import { SvgTicketForPaymentChooseComponent } from './all-svg-itens-about-movie/svg-ticket-for-payment-choose/svg-ticket-for-payment-choose.component';
import { SvgMoreComponent } from './choose-seats-svg/svg-more/svg-more.component';
import { SvgLessComponent } from './choose-seats-svg/svg-less/svg-less.component';
import { SvgChooseSeatsComponent } from './all-svg-itens-about-movie/svg-choose-seats/svg-choose-seats.component';
import { SvgMoreForPaymentMethodComponent } from './all-svg-payment-methods/svg-more-for-payment-method/svg-more-for-payment-method.component';
import { SvgCardCreditComponent } from './all-svg-payment/svg-card-credit/svg-card-credit.component';
import { SvgCardDebitComponent } from './all-svg-payment/svg-card-debit/svg-card-debit.component';
import { SvgPixPaymentComponent } from './all-svg-payment/svg-pix/svg-pix.component';
import { SvgGooglePlayComponent } from './all-svg-payment/svg-google-play/svg-google-play.component';
import { CouponAndGiftCardComponent } from './all-svg-payment/coupon-and-gift-card/coupon-and-gift-card.component';
import { SvgArrowPaymentComponent } from './all-svg-payment/svg-arrow-payment/svg-arrow-payment.component';
import { MasterCardSvgComponent } from './all-svg-payment/card-svg-all/master-card-svg/master-card-svg.component';
import { VisaSvgComponent } from './all-svg-payment/card-svg-all/visa-svg/visa-svg.component';
import { AmericanExpressSvgComponent } from './all-svg-payment/card-svg-all/american-express-svg/american-express-svg.component';
import { DinersClubSvgComponent } from './all-svg-payment/card-svg-all/diners-club-svg/diners-club-svg.component';
import { DiscoverSvgComponent } from './all-svg-payment/card-svg-all/discover-svg/discover-svg.component';
import { HipercardSvgComponent } from './all-svg-payment/card-svg-all/hipercard-svg/hipercard-svg.component';
import { MaestroSvgComponent } from './all-svg-payment/card-svg-all/maestro-svg/maestro-svg.component';
import { EloSvgComponent } from './all-svg-payment/card-svg-all/elo-svg/elo-svg.component';
import { JcbSvgComponent } from './all-svg-payment/card-svg-all/jcb-svg/jcb-svg.component';
import { SvgExclamationMarkPaymentComponent } from './all-svg-payment/svg-exclamation-mark-payment/svg-exclamation-mark-payment.component';
import { SvgIngressoIComponent } from './all-svg-check-in/svg-ingresso-i/svg-ingresso-i.component';
import { SvgCardBeClientComponent } from './all-svg-benefits-be-client/svg-card-be-client/svg-card-be-client.component';
import { SvgTicketBeClientComponent } from './all-svg-benefits-be-client/svg-ticket-be-client/svg-ticket-be-client.component';
import { SvgStarBeClientComponent } from './all-svg-benefits-be-client/svg-star-be-client/svg-star-be-client.component';
import { SvgCellPhoneBeClientComponent } from './all-svg-benefits-be-client/svg-cell-phone-be-client/svg-cell-phone-be-client.component';
import { SvgEyeCutComponent } from './svg-eye-cut/svg-eye-cut.component';
import { SvgEyeOpenComponent } from './svg-eye-open/svg-eye-open.component';
import { SvgNotificationCodeSentEmailComponent } from './svg-notification-code-sent-email/svg-notification-code-sent-email.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SvgLocationComponent,
    SvgLoupeComponent,
    SvgUserComponent,
    SvgLockComponent,
    SvgIngressoComponent,
    SvgUserBodyComponent,
    SvgQuestionMarkComponent,
    SvgTicketsComponent,
    SvgTicketsTwoComponent,
    SvgPersonalDataComponent,
    SvgPaymentMethodsComponent,
    SvgIComponent,
    SvgLockPasswordComponent,
    SvgLock2Component,
    SvgFacebookComponent,
    SvgYoutubeComponent,
    SvgInstagramComponent,
    SvgLinckedinComponent,
    SvgVisaComponent,
    SvgMastercardComponent,
    SvgEloComponent,
    SvgAuraComponent,
    SvgAmericanExpressComponent,
    SvgHipercardComponent,
    SvgPagbankComponent,
    SvgC9Component,
    SvgNubankComponent,
    SvgItauComponent,
    SvgBradescoComponent,
    SvgNextComponent,
    SvgSantanderComponent,
    SvgCaixaComponent,
    SvgInterComponent,
    SvgBancoDoBrasilComponent,
    SvgPaypalComponent,
    SvgPayComponent,
    SvgPayGoogleComponent,
    SvgPixComponent,
    SvgShareComponent,
    SvgLoupeMovieTheaterComponent,
    SvgHeartComponent,
    SvgSeatsComponent,
    SvgPriceComponent,
    SvgDetailsComponent,
    SvgExitComponent,
    SvgTicketCabinComponent,
    SvgEuaComponent,
    SvgChooseSeatsComponent,
    SvgTicketsForSeatsComponent,
    SvgPopcornComponent,
    SvgCardForSeatsComponent,
    SvgCalendarComponent,
    SvgClockComponent,
    SvgMoreComponent,
    SvgLessComponent,
    SvgTrashcanComponent,
    SvgExclamationMarkComponent,
    SvgBodySeatsComponent,
    SvgBlockedComponent,
    SvgWheelchairComponent,
    SvgObeseComponent,
    SvgTicketComponent,
    SvgTicketFullComponent,
    SvgLessForPaymentMethodComponent,
    SvgMoreForPaymentMethodComponent,
    SvgTicketForPaymentChooseComponent,
    SvgCardCreditComponent,
    SvgCardDebitComponent,
    SvgPixPaymentComponent,
    SvgGooglePlayComponent,
    CouponAndGiftCardComponent,
    SvgArrowPaymentComponent,
    MasterCardSvgComponent,
    VisaSvgComponent,
    AmericanExpressSvgComponent,
    DinersClubSvgComponent,
    DiscoverSvgComponent,
    HipercardSvgComponent,
    MaestroSvgComponent,
    EloSvgComponent,
    JcbSvgComponent,
    SvgExclamationMarkPaymentComponent,
    SvgIngressoIComponent,
    SvgCardBeClientComponent,
    SvgTicketBeClientComponent,
    SvgStarBeClientComponent,
    SvgCellPhoneBeClientComponent,
    SvgEyeCutComponent,
    SvgEyeOpenComponent,
    SvgNotificationCodeSentEmailComponent
  ],
  exports: [
    SvgLocationComponent,
    SvgLoupeComponent,
    SvgUserComponent,
    SvgLockComponent,
    SvgIngressoComponent,
    SvgUserBodyComponent,
    SvgQuestionMarkComponent,
    SvgTicketsComponent,
    SvgTicketsTwoComponent,
    SvgPersonalDataComponent,
    SvgPaymentMethodsComponent,
    SvgIComponent,
    SvgLockPasswordComponent,
    SvgLock2Component,
    SvgFacebookComponent,
    SvgYoutubeComponent,
    SvgInstagramComponent,
    SvgLinckedinComponent,
    SvgVisaComponent,
    SvgMastercardComponent,
    SvgEloComponent,
    SvgAuraComponent,
    SvgAmericanExpressComponent,
    SvgHipercardComponent,
    SvgPagbankComponent,
    SvgC9Component,
    SvgNubankComponent,
    SvgItauComponent,
    SvgBradescoComponent,
    SvgNextComponent,
    SvgSantanderComponent,
    SvgCaixaComponent,
    SvgInterComponent,
    SvgBancoDoBrasilComponent,
    SvgPaypalComponent,
    SvgPayComponent,
    SvgPayGoogleComponent,
    SvgPixComponent,
    SvgShareComponent,
    SvgLoupeMovieTheaterComponent,
    SvgHeartComponent,
    SvgSeatsComponent,
    SvgPriceComponent,
    SvgDetailsComponent,
    SvgExitComponent,
    SvgTicketCabinComponent,
    SvgEuaComponent,
    SvgChooseSeatsComponent,
    SvgTicketsForSeatsComponent,
    SvgPopcornComponent,
    SvgCardForSeatsComponent,
    SvgCalendarComponent,
    SvgClockComponent,
    SvgMoreComponent,
    SvgLessComponent,
    SvgTrashcanComponent,
    SvgExclamationMarkComponent,
    SvgBodySeatsComponent,
    SvgBlockedComponent,
    SvgWheelchairComponent,
    SvgObeseComponent,
    SvgTicketComponent,
    SvgTicketFullComponent,
    SvgTicketFullComponent,
    SvgLessForPaymentMethodComponent,
    SvgMoreForPaymentMethodComponent,
    SvgTicketForPaymentChooseComponent,
    SvgCardCreditComponent,
    SvgCardDebitComponent,
    SvgPixPaymentComponent,
    SvgGooglePlayComponent,
    CouponAndGiftCardComponent,
    SvgArrowPaymentComponent,
    MasterCardSvgComponent,
    VisaSvgComponent,
    AmericanExpressSvgComponent,
    DinersClubSvgComponent,
    DiscoverSvgComponent,
    HipercardSvgComponent,
    MaestroSvgComponent,
    EloSvgComponent,
    JcbSvgComponent,
    SvgExclamationMarkPaymentComponent,
    SvgIngressoIComponent,
    SvgCardBeClientComponent,
    SvgTicketBeClientComponent,
    SvgStarBeClientComponent,
    SvgCellPhoneBeClientComponent,
    SvgEyeCutComponent,
    SvgEyeOpenComponent,
    SvgNotificationCodeSentEmailComponent
  ]
})
export class AllSvgAppModule { }
