import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { switchMap, map } from 'rxjs/operators';
import { UserService } from './user.service';
import { app } from 'firebase';
import { AppUser } from './models/AppUser';
import { AngularFireObject } from '@angular/fire/database';

@Injectable({
	providedIn: 'root'
})
export class AdminGuard implements CanActivate {
	appUser: AngularFireObject<AppUser>;
	constructor(private auth: AuthService, private router: Router, private userService: UserService) {}

	// canActivate() {
	// 	return this.auth.$user.pipe(
	// 		map((user) => {
	// 			if (user) {
	// 				return true;
	// 			}

	// 			this.router.navigate([ '/login' ]);
	// 			return false;
	// 		})
	// 	);
	// }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		return this.auth.$user.pipe(switchMap((user) => this.userService.get(user.uid).valueChanges())).pipe(
			map((user) => {
				if (user.isAdmin) return true;

				this.router.navigate([ '/login' ], {
					queryParams: {
						redirect_url: state.url
					}
				});
				return false;
			})
		);
	}
}
