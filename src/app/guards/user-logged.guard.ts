import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import {Router } from '@angular/router';
import { map } from 'rxjs';
import { Auth, authState } from '@angular/fire/auth';


export const userLoggedGuard : CanActivateFn = (route, state) =>{
  const auth = inject(Auth);;
  const router = inject(Router);
  return authState(auth).pipe(
    map(user => {
      if (user) {
        router.navigate(['/profileUser']);
        return false;
      } else {
        return true;
      }
    })
  );
}

