import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class MockPermissionsGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean{

    // here should be checking the user's role by condition token.role === Roles.Admin

    if (confirm('Are you admin?')) {
      return true;
    } else {
      this.router.navigate(['/forbidden']);
    }

  }
}