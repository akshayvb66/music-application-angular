import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  allTracks=[];

  constructor(private _searchService:SearchService,private http:HttpClient,private router:Router) { }

  ngOnInit() {
    this._searchService.searchWishlist().subscribe((data) => {
      this.allTracks=data;
      console.log(this.allTracks);
  }); 
  }



}
