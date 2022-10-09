import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { BehaviorSubject, debounceTime, Subscription } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { Filter } from 'src/app/models/movieFilter';
import { MovieService } from 'src/app/services/movie.service'


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit, OnDestroy {
  public pageLoading: boolean = true;
  moviesData: Movie[] = [];
  genresList: string[] = [];
  displayedColumns: string[] = ['title', 'year', 'runtime', 'revenue', 'rating', 'genre'];

  titleFilter = new FormControl();
  genresFilter = new FormControl(['All']);
  dataSource: MatTableDataSource<Movie> = new MatTableDataSource();
  
  titleFilterSubscription: Subscription | undefined;
  genresFilterSubscription: Subscription | undefined;


  constructor(
    private movieService: MovieService,
    private _router: Router
  ) {}
  
  ngOnInit(): void {

    this._setFiltersListeners();
    this._getMovies();
  }

  ngOnDestroy() {
    this.titleFilterSubscription?.unsubscribe();
    this.genresFilterSubscription?.unsubscribe();
  }

  private _getMovies(): void  {
    this.movieService.getMovies().subscribe(movies => {
      this.dataSource = new MatTableDataSource(movies);
      this.dataSource.filterPredicate = this._filterPredicate;

      this.genresList = ['All', ...new Set(movies.flatMap((x) => x.genre))];
      this.pageLoading = false;
    });
  }

  private _setFiltersListeners(): void {

    this.titleFilterSubscription = this.titleFilter.valueChanges.pipe(
      debounceTime(300)
    ).subscribe((title: string): void => { 
      this.dataSource.filter = JSON.stringify({ title: title, genres: this.genresFilter.value});
    });

    this.genresFilterSubscription = this.genresFilter.valueChanges.pipe(
      debounceTime(300)
    ).subscribe((genres: any): void => {
      this.dataSource.filter = JSON.stringify({ title: this.titleFilter.value, genres: genres});
    })
  }

  public onRowClicked(row: any) {
    console.log(row.title);
    this._router.navigate([`/details/${row.title}`]);
  }


  private _filterPredicate(data: Movie, filter: string): boolean {
    let searchTerms: Filter = JSON.parse(filter);

    let titleSearch = () => {
      if(data.title.toLowerCase().match(searchTerms.title.toLowerCase()))
        return true
      
      return false
    }

    let genreSearch = () => {
      if(!searchTerms.genres || searchTerms.genres.includes('All'))
        return true
      return data.genre.some(element => {
        return searchTerms.genres.includes(element);
      });
    }


    return titleSearch() && genreSearch() 
  }


}


