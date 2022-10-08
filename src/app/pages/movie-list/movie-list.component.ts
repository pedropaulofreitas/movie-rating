import { Component, OnInit } from '@angular/core';



export interface Movie {
  year: string,
  votes: string,
  title: string,
  runtime: string,
  revenue: string,
  director: string,
  description: string,
  rating: string,
  rank: string,
  metascore: string,
  genre: string[],
  actors: string[]
}

const MOVIE_DATA: Movie[] = [
  {
    "year": "2014",
    "votes": "757074",
    "title": "Guardians of the Galaxy",
    "runtime": "121",
    "revenue": "333.13",
    "rating": "8.1",
    "rank": "1",
    "metascore": "76",
    "genre": [
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    "director": "James Gunn",
    "description": "A group of intergalactic criminals are forced to work together to stop a fanatical warrior from taking control of the universe.",
    "actors": [
      "Chris Pratt",
      "Vin Diesel",
      "Bradley Cooper",
      "Zoe Saldana"
    ]
  },
  {
    "year": "2012",
    "votes": "485820",
    "title": "Prometheus",
    "runtime": "124",
    "revenue": "126.46",
    "rating": "7",
    "rank": "2",
    "metascore": "65",
    "genre": [
      "Adventure",
      "Mystery",
      "Sci-Fi"
    ],
    "director": "Ridley Scott",
    "description": "Following clues to the origin of mankind, a team finds a structure on a distant moon, but they soon realize they are not alone.",
    "actors": [
      "Noomi Rapace",
      "Logan Marshall-Green",
      "Michael Fassbender",
      "Charlize Theron"
    ]
  },
  {
    "year": "2016",
    "votes": "157606",
    "title": "Split",
    "runtime": "117",
    "revenue": "138.12",
    "rating": "7.3",
    "rank": "3",
    "metascore": "62",
    "genre": [
      "Horror",
      "Thriller"
    ],
    "director": "M. Night Shyamalan",
    "description": "Three girls are kidnapped by a man with a diagnosed 23 distinct personalities. They must try to escape before the apparent emergence of a frightful new 24th.",
    "actors": [
      "James McAvoy",
      "Anya Taylor-Joy",
      "Haley Lu Richardson",
      "Jessica Sula"
    ]
  },
  {
    "year": "2016",
    "votes": "60545",
    "title": "Sing",
    "runtime": "108",
    "revenue": "270.32",
    "rating": "7.2",
    "rank": "4",
    "metascore": "59",
    "genre": [
      "Animation",
      "Comedy",
      "Family"
    ],
    "director": "Christophe Lourdelet",
    "description": "In a city of humanoid animals, a hustling theater impresario's attempt to save his theater with a singing competition becomes grander than he anticipates even as its finalists' find that their lives will never be the same.",
    "actors": [
      "Matthew McConaughey",
      "Reese Witherspoon",
      "Seth MacFarlane",
      "Scarlett Johansson"
    ]
  }
];

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  displayedColumns: string[] = ['title', 'year', 'runtime', 'revenue', 'rating', 'genre'];
  dataSource = MOVIE_DATA;
  

  constructor() { }
  
  ngOnInit(): void {
  }

}


