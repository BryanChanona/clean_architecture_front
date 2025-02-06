import { Component, OnInit } from '@angular/core';
import { GetUsersUseCase } from '../../../core/user/use-cases/getAll.use_case';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../../core/user/models/user.model';

@Component({
  selector: 'app-table-list',
  standalone: false,
  templateUrl: './table-list.component.html',
  styleUrl: './table-list.component.scss',
})
export class TableListComponent  implements OnInit{
  displayedColumns: string[] = ['id', 'name', 'email', 'actions'];
  dataSource = new MatTableDataSource<User>([]);

  constructor(private getAllUseCase : GetUsersUseCase){
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



  ngOnInit(): void {
      
  }

}
