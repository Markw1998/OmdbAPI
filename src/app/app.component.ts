import { Component } from '@angular/core';
import { OmdbApiService } from './services/omdb-api.service';
import { IOMDBResponse } from './services/omdbresponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [OmdbApiService]
})
export class AppComponent {
  movieData: IOMDBResponse;
  errorMessage: any;
constructor(private _omdbService: OmdbApiService){

}

getMovieDetails(movieName: string) : boolean{
  this._omdbService.getMovieData(movieName).subscribe(movieData =>{
    this.movieData = movieData;
    console.log('getMovieDetails ' + this.movieData)
  },
    error => this.errorMessage = <any>error);
  return false;
}

}
