import { Component } from '@angular/core';
import { UserRepository } from '../../../core/user/repositories/user.repository';
import { UserService } from '../../../core/user/services/user.service';
import { User } from '../../../core/user/models/user.model';
import { AddUserUseCase } from '../../../core/user/use-cases/add-user.use_case';
import { showCreateUserAlert } from '../../helpers/user.helpers';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-user.template',
  standalone: false,
  templateUrl: './create-user.template.component.html',
  styleUrl: './create-user.template.component.scss',providers:[{provide:UserRepository, useClass:UserService}]
})
export class CreateUserTemplateComponent {
  user: User = {
    id: 0,
    name: '',
    email: '',
  };

  constructor(private createUser: AddUserUseCase,private router: Router ){}

  onSubmit(): void {
    if (this.user.name && this.user.email){
      // Enviar el usuario sin el ID (porque lo genera la base de datos)
      this.createUser.execute(this.user).subscribe(
        () => {
          showCreateUserAlert('success'); // Mensaje de éxito
          this.user = { id: 0, name: '', email: '' }; // Limpiar formulario
          this.router.navigate(['']); 
        },
        () => {
          showCreateUserAlert('error'); // Mensaje de error
        }
      );
    } else {
      showCreateUserAlert('warning'); // Mensaje de validación
    }
  }

  onCancel(): void {
    this.user = { id: 0, name: '', email: '' }; // Limpiar datos
  }

}
