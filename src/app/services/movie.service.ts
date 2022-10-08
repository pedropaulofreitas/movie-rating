import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { environment } from 'src/environments/environment';

const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class MovieService {


  constructor(
    private http: HttpClient
  ) { }

  public getMovies(): Observable<Movie[]> {
    
    
    return this.http.get<Movie[]>('/web/movies.json');
  }
}
