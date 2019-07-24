import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AngularFireAuth } from '@angular/fire/auth';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import { TherapistsComponent } from './therapists/therapists.component';
import { TherapistComponent } from './therapists/therapist/therapist.component';
import { TreatmentsComponent } from './treatments/treatments.component';
import { ProductsComponent } from './products/products.component';
import { ContactsComponent } from './contacts/contacts.component';
import { BookingComponent } from './booking/booking.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';

import { environment } from 'src/environments/environment';

import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { AdminGuard } from './admin.guard';
import { AuthGuard } from './auth.guard';

const appRoutes: Routes = [
	{ path: 'home', component: LandingComponent },
	{ path: 'teraputer', component: TherapistsComponent },
	{ path: 'behandlingar', component: TreatmentsComponent },
	{ path: 'produkter', component: ProductsComponent },
	{ path: 'kontakt', component: ContactsComponent },
	{ path: 'boka', component: BookingComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'admin', component: AdminComponent, canActivate: [ AuthGuard, AdminGuard ] },
	{ path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		LandingComponent,
		TherapistsComponent,
		TherapistComponent,
		TreatmentsComponent,
		ProductsComponent,
		ContactsComponent,
		BookingComponent,
		LoginComponent,
		AdminComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(appRoutes),
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireDatabaseModule
	],
	providers: [ AngularFireAuth, AuthService, UserService, AdminGuard, AuthGuard ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
