import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service'





@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  displayedColumns: string[] = ['title', 'year', 'runtime', 'revenue', 'rating', 'genre'];
  dataSource: Movie[] = [];
  

  constructor(
    private movieService: MovieService
  ) { }
  
  ngOnInit(): void {
    //fetch movies from api
    this.movieService.getMovies().subscribe(movies => {
      // this.dataSource = response
      this.dataSource = movies;
    })
  }

}


