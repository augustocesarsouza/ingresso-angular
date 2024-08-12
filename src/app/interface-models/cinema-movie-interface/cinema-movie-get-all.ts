export interface CinemaMovieGetAll {
  cinemaDTO: CinemaDTO;
  screeningSchedule: string;
  room: number;
}

interface CinemaDTO {
  district: string;
  id: string;
  nameCinema: string;
  ranking: string;
}
