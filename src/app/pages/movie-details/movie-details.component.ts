import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieComment } from 'src/app/models/comment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { empty, Observable } from 'rxjs';
import { SnackComponent } from 'src/app/components/snack/snack.component';



@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})


export class MovieDetailsComponent implements OnInit {
  public title: string | null = '';
  public comment = new FormControl();
  public items$: Observable<any[]> | undefined;
  private _itemsCollection: AngularFirestoreCollection<MovieComment> | undefined;
  public pageLoading: boolean = true;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private afs: AngularFirestore
  ) {}

  ngOnInit(): void {

    this.title =  this._route.snapshot.paramMap.get('title');

    this._itemsCollection = this.afs.collection<MovieComment>(this.title? this.title : '');

    this.getMovieComments();
  }

  public getMovieComments(): void {
    this.items$ = this._itemsCollection?.valueChanges();
    this.items$?.subscribe(() => this.pageLoading = false);
  } 

  public saveComment(): void {
   this.afs.collection<MovieComment>(this.title? this.title : '')
    .add({text: this.comment.value, author:'john'}).finally( () => 
      this.openSnackBar()
    );
  }

  public openSnackBar(): void {
    this._snackBar.openFromComponent(SnackComponent, {
      duration: 1500,
    });
  }

  public navigateHome(): void {
    this._router.navigate(['/']);
  }

  
}


