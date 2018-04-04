import { Component } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListMeetupComponent } from './list-meetup/list-meetup.component';
import { DatosService } from './services/datos.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
}
