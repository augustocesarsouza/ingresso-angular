import { Component, Input } from '@angular/core';
import { CinemaMovieGetAll } from '../../interface-models/cinema-movie-interface/cinema-movie-get-all';

@Component({
  selector: 'app-modal-details-about-movie-theater',
  templateUrl: './modal-details-about-movie-theater.component.html',
  styleUrl: './modal-details-about-movie-theater.component.scss'
})
export class ModalDetailsAboutMovieTheaterComponent {
  @Input() clickedDetails!: boolean;
  @Input() itemCinemaMovieClickedDetails!: CinemaMovieGetAll;
  @Input() onClickExitSvg!: () => void;

  constructor(){
  }

  ngOnInit(): void {
    // this.onClickChooseSeatsForThisHour = this.onClickChooseSeatsForThisHour.bind(this);
  }
}
