import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './auth.service';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';

=======
>>>>>>> 3611c3867fb5e5f536650764cf42b7f8acdace1f
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
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(routes),
    BrowserModule,
    MDBBootstrapModule.forRoot(),
<<<<<<< 8fb98e5864e961f1af9e0ec635d13ed63d8508d4
    HttpClientModule,
<<<<<<< HEAD
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
    MatInputModule
=======
=======
    AppRoutingModule
>>>>>>> g Please enter the commit message for your changes. Lines starting
>>>>>>> 3611c3867fb5e5f536650764cf42b7f8acdace1f
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
