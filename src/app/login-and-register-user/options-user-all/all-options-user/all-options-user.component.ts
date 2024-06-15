import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../user-interface/user-date';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-options-user',
  templateUrl: './all-options-user.component.html',
  styleUrl: './all-options-user.component.scss'
})
export class AllOptionsUserComponent implements OnInit {
  @Input() onClickWhichDivWasClicked!: (numberDiv: number) => void;
  @Input() userDateStorage!: User | null;
  allContainerSvgConfig!: NodeListOf<HTMLElement>;

  constructor(private router: Router){
  }

  ngOnInit(): void {
    if(typeof window !== "undefined"){
      this.allContainerSvgConfig = document.querySelectorAll(".container-svg-config");
    }
  }

  onClickSetColor(event: MouseEvent, numberDiv: number){
    this.onClickWhichDivWasClicked(numberDiv);

    this.allContainerSvgConfig.forEach((el) => {
      el.style.backgroundColor = "#fff";
      el.style.borderLeft = "4px solid rgb(52, 120, 193)";

      if(el.firstChild){
        let svg = el.firstChild.firstChild as HTMLElement;
        svg.style.fill = "rgb(52, 120, 193)";
      }

      let span = el.lastChild as HTMLElement;
      span.style.color = "rgb(52, 120, 193)";
    })

    const targetDiv = event.currentTarget as HTMLElement;
    targetDiv.style.backgroundColor = "rgb(255, 115, 0)";
    targetDiv.style.borderLeft = "none";

    if(targetDiv.firstChild){
      let svg = targetDiv.firstChild.firstChild as HTMLElement;
      svg.style.fill = "#fff";
    }

    let span = targetDiv.lastChild as HTMLElement;
    span.style.color = "#fff";
  }

  onClickSendHomePage(){
    this.sendHomePage();
  }

  sendHomePage(){
    this.router.navigate(['/']);
  }

  // onClickLogOutOfTheAccount(){
  //   if(typeof window !== "undefined"){
  //     localStorage.removeItem('userLogin');
  //   }
  //   this.userLogin = null;
  //   this.dataService.setData(null);
  //   this.router.navigate(['/my-account/login']);
  // }

  onLoggingOut(){
    if(typeof window !== "undefined"){
      localStorage.removeItem('userLogin');
      this.userDateStorage = null;
      this.router.navigate(['/my-account/login']);
    }
  }
}

