import Swal from 'sweetalert2';
import { User } from '../../core/user/models/user.model';

// Helper para mostrar el mensaje de confirmación de eliminación
export const showDeleteConfirmation = (id: number, deleteCallback: Function): void => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  });

  swalWithBootstrapButtons.fire({
    title: "¿Estás seguro?",
    text: "¡No podrás revertir esto!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "¡Sí, eliminar!",
    cancelButtonText: "No, cancelar",
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      deleteCallback(id); // Llama a la función de eliminación pasada como parámetro
      swalWithBootstrapButtons.fire({
        title: "¡Eliminado!",
        text: "El usuario ha sido eliminado.",
        icon: "success"
      });
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      swalWithBootstrapButtons.fire({
        title: "Cancelado",
        text: "El usuario no ha sido eliminado.",
        icon: "error"
      });
    }
  });
};

// Helper para mostrar el mensaje de confirmación de actualización
export const showUpdateConfirmation = (id: number, userData: User, updateCallback: Function): void => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-primary",
      cancelButton: "btn btn-secondary"
    },
    buttonsStyling: false
  });

  swalWithBootstrapButtons.fire({
    title: "¿Deseas actualizar este usuario?",
    text: "Se guardarán los cambios realizados.",
    icon: "info",
    showCancelButton: true,
    confirmButtonText: "Sí, actualizar",
    cancelButtonText: "No, cancelar",
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      updateCallback(id, userData); // Llama a la función de actualización pasada como parámetro
      swalWithBootstrapButtons.fire({
        title: "¡Actualizado!",
        text: "El usuario ha sido actualizado correctamente.",
        icon: "success"
      });
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      swalWithBootstrapButtons.fire({
        title: "Cancelado",
        text: "No se realizaron cambios.",
        icon: "info"
      });
    }
  });
};


// Helper para mostrar alertas de creación de usuario
export const showCreateUserAlert = (status: 'success' | 'error' | 'warning'): void => {
  let title = '';
  let text = '';
  let icon: 'success' | 'error' | 'warning' = 'success';

  switch (status) {
    case 'success':
      title = 'Usuario Creado!';
      text = 'El usuario ha sido creado correctamente.';
      icon = 'success';
      break;

    case 'error':
      title = 'Error';
      text = 'Hubo un problema al crear el usuario.';
      icon = 'error';
      break;

    case 'warning':
      title = 'Campos Incompletos';
      text = 'Por favor, completa ambos campos.';
      icon = 'warning';
      break;
  }

  Swal.fire({
    title,
    text,
    icon,
    confirmButtonText: 'Aceptar',
  });
};

