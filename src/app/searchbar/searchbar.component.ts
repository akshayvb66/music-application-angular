import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  find:string;
  constructor(private _route: ActivatedRoute, private router: Router,) { }


  ngOnInit() {
  }

  search():any{
    this.router.navigate(['/searchtrack',this.find]);

  }
}
