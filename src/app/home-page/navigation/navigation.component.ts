import { Component, OnDestroy, OnInit } from '@angular/core';
import { StatesAndCitysService } from '../../shared/states-and-citys.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../login-and-register-user/data.service';
import { Subscription } from 'rxjs';
import { UserLogin } from '../../login-and-register-user/data-user-interface/user-login';

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
  existeLogin = true;
  moreInformationLaterModalLogin = false;
  private subscription!: Subscription;
  userLogin: UserLogin | null = null;

  constructor(private statesAndCitysService: StatesAndCitysService, private route: ActivatedRoute, private router: Router, private dataService: DataService){

  }

  ngOnInit(): void {
    this.states = this.statesAndCitysService.getStates();
    if(typeof window !== "undefined"){
      localStorage.removeItem("cities");
    }

    this.citiesLocalState = ["Campinas"];

    if(typeof document !== "undefined"){
      document.body.addEventListener('click', () => {

        if(!this.isMouseEnterRandom){
          this.isClickedRegion = false;
          this.isClickedLoop = false;
          this.isClickedLoginRegister = false;
          this.isMouseEnter = false;
        }
      });
    }

    let userLocalStorage = null;

    if(typeof window !== "undefined"){
      userLocalStorage = localStorage.getItem('userLogin');
    }

    if(userLocalStorage === "null" || userLocalStorage === null){
      this.subscription = this.dataService.data$.subscribe((data: UserLogin) => {
        const userJSON = JSON.stringify(data);

        if(typeof window !== "undefined"){
          localStorage.setItem('userLogin', userJSON);
        }

        this.userLogin = data;
      });
    }else {
      if(userLocalStorage){
        let userJSON: UserLogin = JSON.parse(userLocalStorage);
        this.userLogin = userJSON;
      }
    }

    if(this.userLogin?.email){
      this.existeLogin = true;
    }else {
      this.existeLogin = false;
    }

    this.formatNameOfTheUser();
  }

  formatNameOfTheUser(){
    if(this.userLogin){
      let name = this.userLogin.name.split(" ")[0];
      this.userLogin.name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
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
    let allCitiesLocalStage = null;

    if(typeof window !== "undefined"){
      allCitiesLocalStage = localStorage.getItem('cities');
    }


    if(allCitiesLocalStage){
      const citiesLocalStageInner: string[] = JSON.parse(allCitiesLocalStage);
      citiesLocalStage = citiesLocalStageInner;
    }

    if(!citiesLocalStage.some((el) => el === city)){
      citiesLocalStage.push(city);

      const statesJSON = JSON.stringify(citiesLocalStage);

      if(typeof window !== "undefined"){
        localStorage.setItem('cities', statesJSON);
      }

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
    if(!this.existeLogin){
      this.isClickedLoop = false;
      this.isClickedRegion = false;
      this.isClickedLoginRegister = !this.isClickedLoginRegister;

    }else {
      this.moreInformationLaterModalLogin = !this.moreInformationLaterModalLogin;
    }
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

  onClickCreateNewAccount(){
    this.router.navigate(['/my-account/register']);
  }

  onClickLogOutOfTheAccount(){
    if(typeof window !== "undefined"){
      console.log("sdfvkjsd");

      localStorage.removeItem('userLogin');
    }

    this.userLogin = null;
    this.dataService.setData(null);
    this.router.navigate(['/my-account/login']);
  }

  onClickMyOrders(){
    const url = this.router.serializeUrl(this.router.createUrlTree(['/my-account/my-orders']));
    if(typeof window !== "undefined"){
      window.open(url, '_blank');
    }
  }

  onClickDatePersonal(){
    const url = this.router.serializeUrl(this.router.createUrlTree(['/my-account/personal-data']));
    if(typeof window !== "undefined"){
      window.open(url, '_blank');
    }
  }

  onClickPaymentForms(){
    const url = this.router.serializeUrl(this.router.createUrlTree(['/my-account/payment-methods']));
    if(typeof window!== "undefined"){
      window.open(url, '_blank');
    }
  }

  onClickIngressoImg(){
    this.router.navigate(['/']);
  }

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}
