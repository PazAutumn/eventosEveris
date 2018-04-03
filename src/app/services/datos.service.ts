import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';


@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }


  ngOnInit() {
    /*this.getProductos();*/
  }

}
