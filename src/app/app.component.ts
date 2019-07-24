import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
	title = 'fotidyllen-angular';

	constructor(private auth: AuthService, private userService: UserService, private router: Router) {
		auth.$user.subscribe((user) => {
			if (user) {
				userService.save(user);

				let redirectUrl = localStorage.getItem('redirect_url');

				if (redirectUrl) {
					router.navigate([ redirectUrl ]);
					localStorage.removeItem('redirect_url');
				}
			}
		});
	}
}
