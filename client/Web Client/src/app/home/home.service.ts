import {Injectable} from '@angular/core';
import {HomePage} from './HomePage';
import { Observable, of } from 'rxjs';
import { tap, catchError, map  } from 'rxjs/operators';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class HomeService {
  apiUrl:string = "http://localhost:4000/home";

  constructor(private http: HttpClient) { }


  getBannerData(): Observable<HomePage> {

    return this.http.get<HomePage>(this.apiUrl).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError<HomePage>(`HomePage Error`))
    );
}

private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

}
