import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Track } from './music';
import { mapChildrenIntoArray } from '@angular/router/src/url_tree';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  url;

  music;

  constructor(private http:HttpClient) { }

  createTraveller(track:Track){
    this.url= "http://localhost:8082/api/v1/music";
    return this.http.post(this.url,    {  trackId: 67,
      trackName: "Im freak",
      trackComment:"Enrique Igliseas"});
  }

  
}
