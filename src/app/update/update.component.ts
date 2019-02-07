import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  trackId:number;
  trackComment:string;
  constructor(private _searchService:SearchService,private router:Router) { }


  @Input()
  track

  ngOnInit() {
  }

  updateMusic(find) {

    this.trackId=this.track.trackId;
    this.trackComment=find;
  
    this._searchService.updateComment(this.trackId,this.trackComment)
    .subscribe(
        data => {
          console.log("PUT Request is successful ", data);},
        error => {
          console.log("Error", error);}
      );
      }

      deleteMusic() {

        this.trackId=this.track.trackId;
      
        this._searchService.deleteTrack(this.trackId)
        .subscribe(
            data => {
              console.log("PUT Request is successful ", data);},
            error => {
              console.log("Error", error);}
          );
          }
    

}
