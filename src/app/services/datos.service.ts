import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';



@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
}
export class DatosService {
  constructor(
    private http: HttpClient
  ){ }

  ngOnInit() {

    this.http.get('https://everis-laboratoria-challenge.herokuapp.com/event').subscribe(res => {
    });

    var data = {
      "name": "Nicolás",
      "lastName": "Gajardo",
      "email": "ngajardo1@everis.com",
      "password": "1234"
    }
    this.http.post('https://everis-laboratoria-challenge.herokuapp.com/user', data).subscribe(res => {
      console.log(res);
    });
  }

}
