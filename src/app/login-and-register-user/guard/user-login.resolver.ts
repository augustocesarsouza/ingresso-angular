// import {  ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
// import { UserLogin } from '../data-user-interface/user-login';
// import { inject } from '@angular/core';
// import { LoginUserService } from '../login-user.service';

// export const userLoginResolve: ResolveFn<UserLogin> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
//   const emailOrCpf = route.queryParamMap.get('emailOrCpf');
//   const password = route.queryParamMap.get('password');

//   return inject(LoginUserService).loginUser(emailOrCpf ?? "", password ?? "");
// };
