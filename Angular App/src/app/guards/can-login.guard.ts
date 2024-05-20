import { CanActivateFn, Router } from '@angular/router';
import { AccountService } from '../_Services/account.service';
import { inject } from '@angular/core';

export const canLoginGuard: CanActivateFn = (route, state) => {
  const accountServ =inject(AccountService);
  const router =inject(Router);
  if(accountServ.isLogged){
    return true;
  }
  router.navigateByUrl("/login");
  return false;
};
