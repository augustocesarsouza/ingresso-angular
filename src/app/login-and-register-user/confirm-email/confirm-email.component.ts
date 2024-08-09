import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../itens-about-movie/service/user.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrl: './confirm-email.component.scss'
})
export class ConfirmEmailComponent {
  userId = "";
  token!: string;
  confirmEmail = false;

  constructor(private route: ActivatedRoute, private router: Router, private user_service: UserService){

  }

  ngOnInit(): void {
    if(typeof document === "undefined") return;

    this.route.paramMap.subscribe(params => {
      let tokenGet = params.get('token');
      if(tokenGet){
        this.token = tokenGet;
        document.body.style.backgroundColor = "#fff";

        if(this.token !== null && this.token.length > 20){
          const token: any = jwtDecode(this.token);

          if(!token)
            return;

          const tokenExp = token.exp;

          const currentTime = Date.now() / 1000;

          const expirationDate = new Date(tokenExp * 1000).toISOString();
          const expirationDateData = new Date(expirationDate);

          const hourCurrentUtc = new Date(currentTime * 1000).toISOString();

          const dateObject = new Date(hourCurrentUtc);

          if (expirationDateData > dateObject) {
            // token valido
            this.userId = token.id;
          }else {
            // token não valido
            this.userId = token.id;
            // this.router.navigate(['/home']);
          }
          console.log(this.userId);

          this.confirmEmailSentToEmail(this.userId);

        }
      }
    });
  }

  confirmEmailSentToEmail(userId: string){
    // Amanhar ver isso vai mandar a "URL" no emaul e eu vou clicar e ele vai me redirecionar para essa aba do token
    this.user_service.confirmTokenRegisterUser(this.token).subscribe({
      next: (success: any) => {
        console.log(success);
        this.confirmEmail = true;

      },
      error: error => {
        if(error.status === 400){
          this.confirmEmail = false;
        }
      }
    });
  }
}
