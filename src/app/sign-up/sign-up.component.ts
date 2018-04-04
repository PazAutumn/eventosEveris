import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  form:FormGroup;

  constructor(private http: HttpClient) { }


  ngOnInit() {

    var data = {
      "name": "Nicolás",
      "lastName": "Gajardo",
      "email": "ngajardo@everis.com",
      "password": "1234"
    }


    this.http.post('https://everis-laboratoria-challenge.herokuapp.com/authentication', data).subscribe(res => {
      console.log(res);
    });
  }

}
