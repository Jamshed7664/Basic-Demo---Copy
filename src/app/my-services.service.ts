import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EmailValidator } from '@angular/forms';
import { throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class MyServicesService implements OnInit {

  constructor(private http: HttpClient) { }
  ngOnInit() {

  }
  loginuser(object) {
    return this.http.post<AuthResponseData>('https://console.asthma-action-hero.i22.biz/api/v1/user/login.json', object)
  }
  getData() {
    return this.http.get('https://simplelogin-3e4d5.firebaseio.com/myFile.json')
  }

  onSubmit(object) {
    return this.http.post('https://simplelogin-3e4d5.firebaseio.com/myFile.json', object)
  }
  getAllComents() {
    return this.http.get('https://jsonplaceholder.typicode.com/comments')

  }




// With firebase

  signUp(email, password) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDBOCnZEoWjRubdohlE122nW8P-uwsRSmo', {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(catchError(this.handleError))
  }

  signIn(email, password) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDBOCnZEoWjRubdohlE122nW8P-uwsRSmo', {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(catchError(this.handleError))
  }

  private handleError(errRes: HttpErrorResponse) {
    let errMsg = "An unknown error occured"
    if(!errRes.error || !errRes.error.error){
      return throwError(errMsg)
    }
     else{
      switch (errRes.error.error.message) {
        case 'EMAIL_EXISTS':
          errMsg = "The email address is already in use by another account."
          break;
        case 'OPERATION_NOT_ALLOWED':
          errMsg = "Password sign-in is disabled for this project."
          break;
        case 'TOO_MANY_ATTEMPTS_TRY_LATER':
          errMsg = "We have blocked all requests from this device due to unusual activity. Try again later."
          break;
        case 'EMAIL_NOT_FOUND':
          errMsg = 'There is no user record corresponding to this identifier. The user may have been deleted.'
          break;
        case 'INVALID_PASSWORD':
          errMsg = 'The password is invalid or the user does not have a password.'
          break;
        case 'USER_DISABLED':
          errMsg = 'The user account has been disabled by an administrator.'
          break;
          default:
          errMsg ="Unknown Error"
      }
      return throwError(errMsg);
     }

  }
}
