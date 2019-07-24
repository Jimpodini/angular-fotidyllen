import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.scss', '../app.component.scss' ]
})
export class LoginComponent {
	constructor(private auth: AuthService, private userService: UserService) {}

	login() {
		this.auth.login();
	}

	logout() {
		this.auth.logout();
	}
}
