import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-addwishlist',
  templateUrl: './addwishlist.component.html',
  styleUrls: ['./addwishlist.component.css']
})
export class AddwishlistComponent implements OnInit {

  @Input()
  track

  trackId:number;
  trackName:string;
  trackComment:string;
  trackImage:string;


  constructor(private _searchService:SearchService) { }

  ngOnInit() {
  }

  addTrack() {
    this.trackId=this.track.listeners;
    console.log(this.trackId);  
    this.trackName=this.track.name;
    console.log(this.trackName); 
    this.trackComment=this.track.artist;
    console.log(this.trackComment);
    this.trackImage=this.getUrl(this.track);
    console.log(this.trackImage);  


    this._searchService.addToWishlist(this.trackId,this.trackName,this.trackComment,this.trackImage)
    .subscribe(
        data => {
        console.log("aksh err")  
          console.log("POST Request is successful ", data);},
        error => {
          console.log("Error", error);}
      );
      }
getUrl(data){
  return data['image'][3]['#text'];
}
}
