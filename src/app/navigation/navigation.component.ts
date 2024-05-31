import { Component, OnDestroy, OnInit } from '@angular/core';
import { StatesAndCitysService } from '../shared/states-and-citys.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../login-and-register-user/data.service';
import { Subscription } from 'rxjs';
import { UserLogin } from '../login-and-register-user/data-user-interface/user-login';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnInit, OnDestroy {
  isClickedRegion = false;
  isClickedLoop = false;
  isClickedLoginRegister = false;
  states: string[] = [];
  cities: string[] = [];
  citiesLocalState: string[] = [];
  // cidades: Record<string, string[]> = {};
  selectedState = "Estado";
  isMouseEnter = false;
  isMouseEnterRandom = false;
  private subscription!: Subscription;
  userLogin!: UserLogin;

  constructor(private statesAndCitysService: StatesAndCitysService, private route: ActivatedRoute, private router: Router, private dataService: DataService){
  }

  ngOnInit(): void {
    this.states = this.statesAndCitysService.getStates();

    localStorage.removeItem("cities");
    this.citiesLocalState = ["Campinas"];

    document.body.addEventListener('click', () => {

      if(!this.isMouseEnterRandom){
        this.isClickedRegion = false;
        this.isClickedLoop = false;
        this.isClickedLoginRegister = false;
        this.isMouseEnter = false;
      }
    });

    let userLocalStorage = localStorage.getItem('userLogin');
    // Colocar um tempo para tirar do localStorage que está armazenado e fazer o usuario fazer login de pois tipo 10 MINUTE

    if(userLocalStorage === "null" || userLocalStorage === null){
      this.subscription = this.dataService.data$.subscribe((data: UserLogin) => {
        const userJSON = JSON.stringify(data);
        localStorage.setItem('userLogin', userJSON);

        this.userLogin = data;
      });
    }else {
      if(userLocalStorage){
        let userJSON: UserLogin = JSON.parse(userLocalStorage);
        this.userLogin = userJSON;
      }
    }
  }

  onClickChoseRegion(){
    this.isClickedLoginRegister = false;
    this.isClickedLoop = false;
    this.isClickedRegion = !this.isClickedRegion;
  }

  changeRegion(event: Event) {
    const target = event.target as HTMLSelectElement;
    let region = target.value;

    let cities = this.statesAndCitysService.getCityFromKeyValue(region);

    if(cities === undefined || cities.length === 0){
      this.cities = [];
      return;
    }

    this.cities = cities;
  }

  changeCityClick(city: string){
    if(city === "Cidade")
      return;

    let citiesLocalStage: string[] = [];

    let allCitiesLocalStage = localStorage.getItem('cities');

    if(allCitiesLocalStage){
      const citiesLocalStageInner: string[] = JSON.parse(allCitiesLocalStage);
      citiesLocalStage = citiesLocalStageInner;
    }

    if(!citiesLocalStage.some((el) => el === city)){
      citiesLocalStage.push(city);

      const statesJSON = JSON.stringify(citiesLocalStage);
      localStorage.setItem('cities', statesJSON);

      citiesLocalStage = ["Campinas", ...citiesLocalStage];

      this.citiesLocalState = citiesLocalStage;
    }
  }

  clickedLoupe(){
    this.isClickedLoginRegister = false;
    this.isClickedRegion = false;
    this.isClickedLoop = !this.isClickedLoop;
  }

  clickLoginOrRegister(){
    this.isClickedLoop = false;
    this.isClickedRegion = false;
    this.isClickedLoginRegister = !this.isClickedLoginRegister;
  }

  onMouseEnter(){
    this.isMouseEnter = false;
  }

  onMouseLeave(){
    this.isMouseEnter = true;
  }

  onMouseEnterRandom(){
    this.isMouseEnterRandom = true;
  }

  onMouseLeaveRandom(){
    this.isMouseEnterRandom = false;
  }

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}
