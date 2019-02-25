import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {IOMDBResponse} from '../services/omdbresponse';

@Injectable({
  providedIn: 'root'
})
export class OmdbApiService {

   _siteURL = 'http://www.omdbapi.com/?t=';
   _apiKey = '&apikey=8de6fc09';

  constructor(private _http: HttpClient) { 
    console.log("_siteURL: "+this._siteURL);
  }

  getMovieData(movieName): Observable<IOMDBResponse> {
    console.log("URL: "+this._siteURL+movieName+this._apiKey);
    return this._http.get<IOMDBResponse>(this._siteURL+movieName+this._apiKey).pipe(tap(data => console.log('All '+JSON.stringify(data))),
    catchError(this.handleError));

  }
  private handleError(err: HttpErrorResponse) {
    console.log('omdbApiService: ' + err.message);
    return Observable.throw(err.message);
    
  }
}
