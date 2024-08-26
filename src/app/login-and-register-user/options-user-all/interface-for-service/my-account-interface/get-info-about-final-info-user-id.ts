export interface GetInfoAboutFinalInfoUserId {
  cinemaDTO: {
    nameCinema: string;
    district: string;
  },
  movieDTO: {
    imgUrl: string;
    title: string;
    duration: string;
  }
  seats: string;
  finalPaymentCheckoutMovieId: string;
}
