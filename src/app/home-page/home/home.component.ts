import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { MovieHighlight } from '../movie-interface/movie-highlight';
import { MovieTrending } from '../movie-interface/movie-trending';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  movieHighlight!: MovieHighlight;
  moviesTrending!: Array<MovieTrending>;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    if (typeof document !== 'undefined') {
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
  }

  ngAfterViewInit(): void {
    if (typeof document !== 'undefined') {
      this.initCarousel();
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
        containerLeft!.style.display = scrollElement.scrollLeft > 0 ? 'flex' : 'none';
        containerRight!.style.display = (scrollElement.scrollLeft + scrollElement.clientWidth) >= scrollElement.scrollWidth ? 'none' : 'flex';
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
}
