import { BrowserModule } from "@angular/platform-browser";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { HttpClientModule } from "@angular/common/http";

import { MatDialogModule } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatFormFieldModule, MatInputModule } from "@angular/material";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AuthService } from "./auth.service";
import { AngularFireDatabase } from "angularfire2/database-deprecated";
import { environment } from "../environments/environment";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";


import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { LoginComponent } from "./login/login.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { ListMeetupComponent } from "./list-meetup/list-meetup.component";
import { SearchComponent } from "./search/search.component";
import { MeetupComponent } from "./meetup/meetup.component";
import { PerfilComponent } from "./perfil/perfil.component";
import { GoogleCalendarComponent } from "./google-calendar/google-calendar.component";
import { CommentsComponent } from "./comments/comments.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { Routes, RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { RatingComponent } from "./rating/rating.component";

const routes: Routes = [
  { path: "", redirectTo: "/list-meetup", pathMatch: "full" },
  { path: "list-meetup", component: ListMeetupComponent },
  { path: "sign-up", component: SignUpComponent },
  { path: "perfil", component: PerfilComponent },
  { path: "login", component: LoginComponent },
  { path: "meetup", component: MeetupComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignUpComponent,
    ListMeetupComponent,
    SearchComponent,
    MeetupComponent,
    PerfilComponent,
    GoogleCalendarComponent,
    CommentsComponent,
    WelcomeComponent,
    RatingComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(routes),
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    AngularFireDatabaseModule,
  ],
  providers: [AuthService, AngularFireDatabase],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
