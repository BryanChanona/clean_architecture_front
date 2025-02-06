// core/user/repositories/user.repository.ts
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

export abstract class UserRepository {
    abstract getUsers(): Observable<User[]>;
    abstract addUser(user: User): Observable<void>;
    abstract deleteUser(id: number): Observable<void>;
    abstract updateUser(id:number, user: User):Observable<void>;
    abstract getUserById(id : number): Observable<User>;
}