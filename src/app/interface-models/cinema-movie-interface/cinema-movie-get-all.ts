export interface CinemaMovieGetAll {
  cinemaDTO: CinemaDTO;
  screeningSchedule: string;
}

interface CinemaDTO {
  district: string;
  id: string;
  nameCinema: string;
  ranking: string;
}
