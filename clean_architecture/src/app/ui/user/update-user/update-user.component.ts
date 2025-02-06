import { Component } from '@angular/core';
import { User } from '../../../core/user/models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { getUserByIdUseCase } from '../../../core/user/use-cases/get-UserById.use_case';
import { updateUserUseCase } from '../../../core/user/use-cases/update-user_case';


@Component({
  selector: 'app-update-user',
  standalone: false,
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.scss'
})
export class UpdateUserComponent {
  user: User = { id: 0, name: '', email: '' }; // El usuario a actualizar
  userId: number = 0; // Inicializado con valor por defecto



  constructor(private route: ActivatedRoute, private getByIdService: getUserByIdUseCase, private updateByIdService: updateUserUseCase, private router: Router) {

  }


  ngOnInit(): void {
    // Obtener el ID de usuario de la URL de manera segura
    const userIdFromRoute = this.route.snapshot.paramMap.get('id');

    // Verificar si el ID es válido
    if (userIdFromRoute) {
      this.userId = +userIdFromRoute; // Convertir el ID a número
      this.loadUser(); // Cargar el usuario
    } else {
      console.error('No se encontró el ID del usuario en la URL');
      // Manejar el error si no se encuentra el ID en la URL
    }
  }

  loadUser(): void {
    this.getByIdService.execute(this.userId).subscribe(
      (user) => {
        console.log('Usuario cargado:', user); // Verifica los datos recibidos
        this.user = user;
      },
      (error) => {
        console.error('Error cargando el usuario', error);
      }
    );
  }


  updateUser(): void {
    // Actualizar el usuario
    this.updateByIdService.execute(this.userId, this.user).subscribe(
      () => {
        this.router.navigate(['']); // Redirigir después de actualizar
      },
      (error) => {
        console.error('Error actualizando el usuario', error);
      }
    );
  }


}
