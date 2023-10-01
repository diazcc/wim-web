import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import {Router } from '@angular/router';
import { map } from 'rxjs';
import { Auth, authState } from '@angular/fire/auth';


export const userGuard : CanActivateFn = (route, state) =>{
  const auth = inject(Auth);;
  const router = inject(Router);
  console.log("adn");
  return authState(auth).pipe(
    map(user => {
      console.log(user);
      console.log(user?.email);
      if (user) {
        return true; // Permite el acceso a la ruta del administrador.
      } else {
        // Redirige a la página de inicio o a una página de acceso denegado, según tu preferencia.
        router.navigate(['/login']);
        return false;
      }
    })
  );
}
