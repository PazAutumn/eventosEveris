import { Injectable } from '@angular/core';
import { IEmployee } from "./../employee";
import { DataUser } from "./../dataUser";
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';


@Injectable()
export class DatosService {
  constructor(
    public http: HttpClient
  ){}


  ngOnInit() {
    /*this.getProductos();*/
  }

  getEvent() {
    return  this.http.get<IEmployee>('https://everis-laboratoria-challenge.herokuapp.com/event').subscribe(res => {
      console.log(res.data);
    });
  }

  getUser(user) {
    return this.http.post('https://everis-laboratoria-challenge.herokuapp.com/user', user).subscribe(res => {
      console.log(res);
    });
  }


}


/*@Injectable()
export class DatosService {
  constructor(
    private http: HttpClient
  ){ }

  ngOnInit() {

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

}*/
