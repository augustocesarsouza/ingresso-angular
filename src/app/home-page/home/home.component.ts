import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { MovieHighlight } from '../../interface-models/movie-interface/movie-highlight';
import { MovieTrending } from '../../interface-models/movie-interface/movie-trending';
import { TheaterService } from '../services/theater.service';
import { Theater } from '../../interface-models/theater-interface/theater';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  movieHighlight!: MovieHighlight;
  moviesTrending!: MovieTrending[];
  theaters!: Theater[];

  constructor(private movieService: MovieService, private theaterService: TheaterService, private router: Router) { }
  // ver amanha como funciona o scroll dos movies quando clica e ele pucha para o lado e salva qual é o
  // component para eu poder voltar aqui no "component" que faz isso
  ngOnInit(): void {
    if (typeof document !== 'undefined') {
      document.body.style.backgroundColor = "rgb(4, 18, 24)";
      document.body.style.overflowX = 'hidden';
    }

    this.movieService.getMovieHighlight().subscribe({
      next: (data: any) => {
        this.movieHighlight = data.data;
      },
      error: (error: any) => {
        console.log(error);
      }
    });

    this.movieService.getMoviesAllTrending().subscribe({
      next: (data: any) => {
        this.moviesTrending = data.data;
      },
      error: (error: any) => {
        console.log(error);
      }
    });

    //tb_theatres pegar
    this.theaterService.getAllTheaterForDisplayHomepage().subscribe({
      next: (data: any) => {
        this.theaters = data.data;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  ngAfterViewInit(): void {
    if (typeof document !== 'undefined') {
      this.initCarousel();
      this.initCarouselTheater();
    }
  }

  private initCarousel(): void {
    const scrollElement = document.querySelector('.carousel-custom');
    const containerLeft: HTMLElement | null = document.querySelector('.container-arrow-left');
    const containerRight: HTMLElement | null = document.querySelector('.container-arrow-right');

    const scrollLeft = () => scrollElement?.scrollBy({ left: -600, behavior: 'smooth' });
    const scrollRight = () => scrollElement?.scrollBy({ left: 600, behavior: 'smooth' });

    const updateArrowsVisibility = () => {
      if (scrollElement) {
        const maxScrollLeft = scrollElement.scrollWidth - scrollElement.clientWidth;

        containerLeft!.style.display = scrollElement.scrollLeft > 0 ? 'flex' : 'none';
        containerRight!.style.display = scrollElement.scrollLeft >= maxScrollLeft ? 'none' : 'flex';
      }
    };

    containerLeft?.addEventListener('click', scrollLeft);
    containerRight?.addEventListener('click', scrollRight);
    scrollElement?.addEventListener('scroll', updateArrowsVisibility);
    window.addEventListener('resize', updateArrowsVisibility);

    updateArrowsVisibility();
  }

  private initCarouselTheater(): void {
    const scrollElement = document.querySelector('.carousel-custom-theater');
    const containerLeft: HTMLElement | null = document.querySelector('.container-arrow-left-theater');
    const containerRight: HTMLElement | null = document.querySelector('.container-arrow-right-theater');

    const scrollLeft = () => scrollElement?.scrollBy({ left: -600, behavior: 'smooth' });
    const scrollRight = () => scrollElement?.scrollBy({ left: 600, behavior: 'smooth' });

    const updateArrowsVisibility = () => {
      if (scrollElement) {
        const maxScrollLeft = scrollElement.scrollWidth - scrollElement.clientWidth;

        containerLeft!.style.display = scrollElement.scrollLeft > 0 ? 'flex' : 'none';
        containerRight!.style.display = scrollElement.scrollLeft >= maxScrollLeft ? 'none' : 'flex';
      }
    };

    containerLeft?.addEventListener('click', scrollLeft);
    containerRight?.addEventListener('click', scrollRight);
    scrollElement?.addEventListener('scroll', updateArrowsVisibility);
    window.addEventListener('resize', updateArrowsVisibility);

    updateArrowsVisibility();
  }

  editDescription(description: string): string {
    return description.substring(0, 120) + '...';
  }

  onClickCardMovie(movie: MovieTrending){
    this.movieService.changeMovie(movie);
    this.router.navigate(['/movie', movie.id]);
  }
}
