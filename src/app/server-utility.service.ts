import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Customer } from './customers/customer.types';

@Injectable({
  providedIn: 'root',
})
export class ServerUtilityService {
  users: Customer[];

  constructor(public http: HttpClient) {}

  getUsers(): void {
    this.get('/assets/users.json').subscribe((value) => {
      this.users = value;
    });
  }

  public get(url): Observable<any> {
    return this.http.get(url).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }
}
