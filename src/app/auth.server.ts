import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface AuthResponseData{
    kind: string;
    idToken: string;
    email: string;
    refershToken: string;
    expiresin: string;
    localId: string;

}

@Injectable({providedIn: 'root'})

export class AuthService{
    constructor(private http: HttpClient){}

    signUp(email: string, password: string) {
       return this.http.post<AuthResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyClLW_OngTYQ_IYXs8693LinGzPf-N5MjY", 
        {
            email: email,
            password: password,
            returnSecureToken: true
        }
      );
    }
}