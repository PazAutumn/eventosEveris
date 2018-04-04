import { Component, OnInit, Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { RatingComponent } from './../rating/rating.component';

@Component({
  selector: "app-meetup",
  templateUrl: "./meetup.component.html",
  styleUrls: ["./meetup.component.scss"]
})

@Injectable()
export class MeetupComponent implements OnInit {
  Evento: FirebaseListObservable<any[]>;
  constructor(private firebase: AngularFireDatabase)) {
    /*let paramId = params.get('id');
    console.log(paramId);*/
  }
}
