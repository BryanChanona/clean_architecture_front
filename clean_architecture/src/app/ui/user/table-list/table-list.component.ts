import { Component, OnInit } from '@angular/core';
import { GetUsersUseCase } from '../../../core/user/use-cases/getAll.use_case';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../../core/user/models/user.model';
import { DeleteUserUseCase } from '../../../core/user/use-cases/delete-user.use_case';
import { showDeleteConfirmation } from '../../helpers/user.helpers';

@Component({
  selector: 'app-table-list',
  standalone: false,
  templateUrl: './table-list.component.html',
  styleUrl: './table-list.component.scss',
})
export class TableListComponent  implements OnInit{
  displayedColumns: string[] = ['id', 'name', 'email', 'actions'];
  dataSource = new MatTableDataSource<User>([]);

  constructor(private getAllUseCase : GetUsersUseCase, private deleteUserUseCase: DeleteUserUseCase){
   
  }
  ngOnInit(): void {
    this.getAllUseCase.execute().subscribe(
      (users: User[])=>{
        console.log(users)
        this.dataSource.data = users
      },
      (error) => {
        console.error('Error al obtener usuarios:', error);  // Manejo de errores
      }
    )
  }
  deleteUserById(id: number): void {
    this.deleteUserUseCase.execute(id).subscribe(
      () => {
        // Actualizar la lista de usuarios después de eliminar
        this.dataSource.data = this.dataSource.data.filter(user => user.id !== id);
      },
      (error) => {
        console.error('Error al eliminar usuario:', error);
      }
    );
  }
  // Llamada al helper para mostrar la confirmación de eliminación
  deleteUser(id: number): void {
    showDeleteConfirmation(id, this.deleteUserById.bind(this));  // Pasar la función como callback
  }

}
