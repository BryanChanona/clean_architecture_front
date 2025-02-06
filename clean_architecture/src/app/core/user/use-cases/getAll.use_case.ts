import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { UserRepository } from '../repositories/user.repository';

@Injectable({
  providedIn: 'root'
})
export class GetUsersUseCase {
  constructor(private userService: UserRepository) {}

  execute(): Observable<User[]> {
    return this.userService.getUsers(); // Devuelve un Observable<User[]>
  }
}

