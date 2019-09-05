import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { do } from "rxjs/operators";

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

  constructor(public http: HttpClient) {
    console.log('Hello AuthProvider Provider');
  }

//   logIn(): Observable<any> {
//     return this.http.get("http://localhost:8080/SpringRestCrud\"+\"/usersI").do((data) =>{
//       console.log('successfully sign in');
//     }).catch(this.handleError)
// }


signUp(reqData): Observable<any> {
  return this.http.post<any>("http://localhost:8080/SpringRestCrud"+"/usersI", reqData, this.httpOptions).do((data) => {
    console.log('SignUp Data : ', data);
  }).catch(this.handleError)
}


  handleError(err: HttpErrorResponse) {
      console.log("handleError ", err.message);
      return Observable.throw(err.message);
  }

}
