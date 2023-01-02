import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { userModel } from '../model';

@Injectable({
  providedIn: 'root',
})
export class UserManagementService {
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any> {
    const url = `http://localhost:8080/getUsers`;
    return this.http.get<userModel[]>(url).pipe(
      map((response) => (response ? response : [])),
      catchError((err: HttpErrorResponse) => {
        throw err;
      })
    );
  }

  deleteUser(id: any): Observable<any> {
    const url = `http://localhost:8080/deleteUser/${id}`;
    return this.http.delete(url);
  }
}
