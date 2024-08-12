export interface CinemaMovieGetAll {
  cinemaDTO: CinemaDTO;
  screeningSchedule: string;
  room: number;
}

export interface CinemaDTO {
  district: string;
  id: string;
  nameCinema: string;
  ranking: string;
}
