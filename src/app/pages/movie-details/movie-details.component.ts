import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  public title: string | null = '';

  constructor(
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.title =  this._route.snapshot.paramMap.get('title');
    console.log(this.title);
  }

}
