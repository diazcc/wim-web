import { inject } from '@angular/core';
import {  CanActivateFn, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { ProductServicesService } from 'src/app/services/product-services.service';
import { map } from 'rxjs';
import { Auth, authState } from '@angular/fire/auth';

export const adminGuard : CanActivateFn = (route, state) =>{
  const authService = inject(AdminService);
  const auth = inject(Auth);;
  const router = inject(Router);
  const validate = authService.getToken();
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