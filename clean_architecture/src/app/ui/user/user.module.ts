import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableListComponent } from './table-list/table-list.component';
import { MatTableModule } from '@angular/material/table';
import { UserRepository } from '../../core/user/repositories/user.repository';
import { UserService } from '../../core/user/services/user.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  providers:[{provide:UserRepository, useClass:UserService}],
  declarations: [
    TableListComponent
  ],
  imports: [
    CommonModule,MatTableModule,HttpClientModule 
  ],exports:[MatTableModule,TableListComponent]
})
export class UserModule { }
