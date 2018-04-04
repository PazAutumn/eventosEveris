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
    CommentsComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
