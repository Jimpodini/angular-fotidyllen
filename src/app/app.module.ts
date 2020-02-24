import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { LandingComponent } from "./pages/landing/landing.component";
import { TherapistsComponent } from "./pages/therapists/therapists.component";
import { TherapistComponent } from "./pages/therapists/therapist/therapist.component";
import { TreatmentsComponent } from "./pages/treatments/treatments.component";
import { ProductsComponent } from "./pages/products/products.component";
import { ContactsComponent } from "./pages/contacts/contacts.component";
import { BookingComponent } from "./pages/booking/booking.component";
import { GiftCardComponent } from "./pages/gift-card/gift-card.component";

const appRoutes: Routes = [
  { path: "home", component: LandingComponent },
  { path: "teraputer", component: TherapistsComponent },
  { path: "behandlingar", component: TreatmentsComponent },
  { path: "presentkort", component: GiftCardComponent },
  { path: "produkter", component: ProductsComponent },
  { path: "kontakt", component: ContactsComponent },
  { path: "boka", component: BookingComponent },
  { path: "", redirectTo: "home", pathMatch: "full" }
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
    GiftCardComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
