import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieComment } from 'src/app/models/comment';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

const COMMENTS: MovieComment[] = [
  { text:'It sucks', author:'joaquim' },
  { text:'It sucks but good movie', author:'joaquim' },
  { text:'It sucks al right', author:'joaquim' },
  { text:'It sucks', author:'joaquim' },
  { text:'It sucks', author:'joaquim' },
  { text:'It sucks', author:'joaquim' },
  { text:'It sucks', author:'joaquim' },
  { text:'It sucks', author:'joaquim' },
  { text:'It sucks', author:'joaquim' },
  { text:'It sucks', author:'joaquim' },
  { text:'It sucks', author:'joaquim' },
  { text:'It sucks', author:'joaquim' },
  { text:'It sucks', author:'joaquim' },
  { text:'It sucks', author:'joaquim' },
  { text:'It sucks', author:'joaquim' },
  { text:'It sucks', author:'joaquim' },
  { text:'It sucks', author:'joaquim' },
  { text:'It sucks', author:'joaquim' },
  { text:'It sucks', author:'joaquim' },
  { text:'It sucks', author:'joaquim' },
  { text:'It sucks', author:'joaquim' },
  { text:'It sucks', author:'joaquim' },
  { text:'It sucks', author:'joaquim' },
];


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})


export class MovieDetailsComponent implements OnInit {
  public title: string | null = '';
  public comment = new FormControl();
  public comments = COMMENTS;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.title =  this._route.snapshot.paramMap.get('title');
    console.log(this.title);
  }

  public openSnackBar(): void {
    this._snackBar.openFromComponent(PizzaPartyComponent, {
      duration: 1500,
    });
  }

  public navigateHome(): void {
    this._router.navigate(['/']);
  }

  
}


@Component({
  selector: 'snack-bar-component-example-snack',
  template: `
    <span class="example-pizza-party">
    🎥  🎥 thanks for the review 🎥 🎥 
    </span>
  `,
  styles: [
    `
    .example-pizza-party {
      font-size: 20px;
      color: hotpink;
    }
  `,
  ],
})
export class PizzaPartyComponent {}