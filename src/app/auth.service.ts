import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	$user: Observable<firebase.User>;

	constructor(private afAuth: AngularFireAuth, private router: Router, private activatedRouter: ActivatedRoute) {
		this.$user = afAuth.authState;
	}

	login() {
		localStorage.setItem('redirect_url', this.activatedRouter.snapshot.queryParamMap.get('redirect_url'));
		this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
	}

	logout() {
		this.afAuth.auth.signOut();
	}
}
