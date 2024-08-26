export interface GetInfoAboutBayFinal {
  finalPaymentCheckoutMovieDTO: {
    finalPaymentCheckoutMovieId: string;
  },
  finalPaymentCheckoutMovieProductDTO: {
    quantityProduct: number;
    additionalFoodMovieDTO: {
      title: string;
    }
  },
  finalPaymentCheckoutMovieTicketDTO: {
    quantityTicket: number;
    formOfPaymentDTO: {
      formName: string;
    }
  }
}
