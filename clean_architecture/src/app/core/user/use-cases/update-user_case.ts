import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { UserRepository } from '../repositories/user.repository';

@Injectable({
  providedIn: 'root'
})
export class updateUserUseCase {
  constructor(private userService: UserRepository) {}

  execute(id: number, user: User): Observable<void> {
    return this.userService.updateUser(id,user) // Devuelve un Observable<User[]>
  }
}
