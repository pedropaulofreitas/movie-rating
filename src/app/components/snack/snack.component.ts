import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snack',
  template: `
    <span class='movie-comment'>
    🎥  🎥 thanks for the review 🎥 🎥 
    </span>
  `,
  styles: [
    `
    .movie-comment {
      font-size: 20px;
      color: hotpink;
    }
  `,
  ],
})
export class SnackComponent {}

