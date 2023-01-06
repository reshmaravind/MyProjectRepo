import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlCreationOptions } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MainScreenServiceService {
  constructor(private http: HttpClient) {}

  executeWelcomeMessage() {
    const url = 'http://localhost:8080/hello-world';
    return this.http.get<any>(url);
  }

  getLoggedInUser(name: string) {
    let basicAuthHeaderString = this.createBasicAuthHttpHeader();
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString,
    });
    const url = `http://localhost:8080/hello-world/${name}`;
    return this.http.get(url, { headers });
  }

  createBasicAuthHttpHeader() {
    let username = 'Reshma';
    let password = 'password';
    let basicAuthHeaderString =
      'Basic ' + window.btoa(username + ':' + password);
    return basicAuthHeaderString;
  }
}
