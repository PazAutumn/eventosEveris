import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ListMeetupComponent } from './list-meetup/list-meetup.component';
import { SearchComponent } from './search/search.component';
import { MeetupComponent } from './meetup/meetup.component';
import { PerfilComponent } from './perfil/perfil.component';
import { GoogleCalendarComponent } from './google-calendar/google-calendar.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { CommentsComponent } from './comments/comments.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { Routes, RouterModule } from'@angular/router';

const routes: Routes = [
  { path: 'login', component: LoginComponent }
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
    GoogleMapsComponent,
    CommentsComponent,
    WelcomeComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    MDBBootstrapModule.forRoot(),
<<<<<<< 8fb98e5864e961f1af9e0ec635d13ed63d8508d4
    HttpClientModule,
=======
    AppRoutingModule
>>>>>>> g Please enter the commit message for your changes. Lines starting
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
