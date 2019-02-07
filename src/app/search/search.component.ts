import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { AddService } from '../add.service';
import { Track } from '../music';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchdata;
  searchimage;
  public find;
  constructor(private _searchService: SearchService,public _route: ActivatedRoute, private router: Router, private _addService: AddService, private http: HttpClient) { }

  ngOnInit() {
    this.find = this._route.snapshot.paramMap.get('find');
    this._searchService.searchMusic(this.find).subscribe((data) => {
      this.searchdata = data['results']['trackmatches']['track']
    });
  }
  
  getUrl(track) {
    return track['image'][3]['#text'];
  }

}
