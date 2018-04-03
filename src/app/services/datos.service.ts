import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';



@Injectable()
<<<<<<< HEAD
export class ConfigService {
  constructor(private http: HttpClient) { }


  ngOnInit() {
    /*this.getProductos();*/
=======
export class DatosService {
  constructor(
    private http: HttpClient
  ){ }

  ngOnInit() {

    this.http.get('https://everis-laboratoria-challenge.herokuapp.com/event').subscribe(res => {
      console.log(res.data);
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
>>>>>>> 77cacf17981a7d72635b4771ed0e0047a1dfc56e
  }

}
