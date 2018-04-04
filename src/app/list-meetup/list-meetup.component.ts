import { Component, OnInit, Injectable } from '@angular/core';
import { MeetupComponent } from './../meetup/meetup.component';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-list-meetup',
  templateUrl: './list-meetup.component.html',
  styleUrls: ['./list-meetup.component.scss']
})

@Injectable()
export class ListMeetupComponent implements OnInit {
  datas : data[] = [];
  listmeetup = []
  
  constructor(private firebase: AngularFireDatabase) { }

  ngOnInit() {
    const x = this.firebase.list('Data');
    x.snapshotChanges().subscribe(item => {
      console.log(item)
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.listmeetup.push(y as data)
        console.log(y, 'aca lo hice');
      })
    })
  }
}   

interface data {
  date: String,
  id: String,
  image: String,
  location: String,
  subtitle: String,
  title: String
}
