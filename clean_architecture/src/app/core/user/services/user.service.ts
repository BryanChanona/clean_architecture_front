import { Injectable } from '@angular/core';
import { UserRepository } from '../repositories/user.repository';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';




@Injectable({
    providedIn: 'root',
})

export class UserService extends UserRepository {
    private apiUrl = 'http://localhost:8080/users/';

    constructor(private http: HttpClient) {
        super();
    }
    getUsers(): Observable<User[]> {
        return this.http.get<{ users: User[] }>(this.apiUrl).pipe(
            map(response => {
                return response.users;
            }) // Extrae el array "users"
        );
    }
    addUser(user: User): Observable<void> {
        return this.http.post<void>(this.apiUrl, user); // No se envía 'id', solo 'name' y 'email'
      }
      deleteUser(id: number): Observable<void> {
        const url = `${this.apiUrl}${id}`; 
        return this.http.delete<void>(url)
      }
      updateUser(id: number, user: User): Observable<void> {
        const url = `${this.apiUrl}${id}`; 
        return this.http.put<void>(url, user);
    }
    getUserById(id: number): Observable<User> {
        const url = `${this.apiUrl}${id}`; 
        return this.http.get<User>(url); 
      }
    



}