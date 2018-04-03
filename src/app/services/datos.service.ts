import { Injectable } from '@angular/core';
import { Fecha } from "./../fecha";
import { IEmployee } from "./../employee";
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';


@Injectable()
export class DatosService {
  fecha: Observable<Fecha>;
  url = ``
  constructor(
    public http: HttpClient
  ){}


  ngOnInit() {
    /*this.getProductos();*/
  }

  getEvent(): Observable<IEmployee>  {
    return this.http.get<IEmployee>(this.url +'https://everis-laboratoria-challenge.herokuapp.com/event/').map(res => res);
  }

  postEvent(id): Observable {
    return this.http.post('https://everis-laboratoria-challenge.herokuapp.com/event/' + id).map(res => res);
  }

  getUser(user): Observable<IEmployee>{
    return this.http.get<IEmployee>(this.url + 'https://everis-laboratoria-challenge.herokuapp.com/user'+user).map(res => res);
  }


}
