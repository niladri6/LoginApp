import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';
import {catchError} from 'rxjs/operators/catchError'
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
  };
  this: any;

  constructor(public http: HttpClient) {
    console.log('Hello AuthProvider Provider');
  }

//   logIn(): Observable<any> {
//     return this.http.get("http://localhost:8080/SpringRestCrud\"+\"/usersI").do((data) =>{
//       console.log('successfully sign in');
//     }).catch(this.handleError)
// }


signUp(reqData): Observable<any> {
  return this.http.post<any>("http://localhost:8080/SpringRestCrud"+"/usersI", reqData, this.httpOptions).pipe(tap((data) => {
    console.log('SignUp Data : ', data);
  })).catchError(this.this.handleError)
}


  handleError(err: HttpErrorResponse) {
      console.log("handleError ", err.message);
      return Observable.throw(err.message);
  }

}
