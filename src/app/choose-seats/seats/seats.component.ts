import { Component, OnInit } from '@angular/core';
import { ObjectForOrderSummary } from '../../movie-info/movie-choose-movie-theater/movie-choose-movie-theater.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrl: './seats.component.scss'
})
export class SeatsComponent implements OnInit  {
  objectForOrderSummary!: ObjectForOrderSummary;

  constructor(private router: Router){
    const navigation = this.router.getCurrentNavigation();
    if(navigation?.extras?.state){
      let state: any = navigation.extras.state
      this.objectForOrderSummary = state.objectForOrderSummary;
    }
  }

  ngOnInit(): void {
    console.log(this.objectForOrderSummary);
  }
}
