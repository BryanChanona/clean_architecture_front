import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRepository } from '../repositories/user.repository';

@Injectable({
  providedIn: 'root'
})
export class DeleteUserUseCase {
  constructor(private userService: UserRepository) {}

  execute(id: number): Observable<void> {
    return this.userService.deleteUser(id); 
  }
}

