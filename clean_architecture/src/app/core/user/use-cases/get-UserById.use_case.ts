import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { UserRepository } from '../repositories/user.repository';

@Injectable({
  providedIn: 'root'
})
export class getUserByIdUseCase {
  constructor(private userService: UserRepository) {}

  execute(id: number): Observable<User> {
    return this.userService.getUserById(id) // Devuelve un Observable<User[]>
  }
}