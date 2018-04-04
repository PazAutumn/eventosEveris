import { Component, OnInit } from "@angular/core";
import { FirebaseListObservable } from "angularfire2/database-deprecated";

@Component({
  selector: "app-meetup",
  templateUrl: "./meetup.component.html",
  styleUrls: ["./meetup.component.scss"]
})
export class MeetupComponent implements OnInit {
  data: FirebaseListObservable<any[]>;
  constructor() {}

  ngOnInit() {
    console.log(this.data);
  }
}
