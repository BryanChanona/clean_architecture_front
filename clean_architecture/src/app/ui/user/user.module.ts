import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableListComponent } from './table-list/table-list.component';
import { MatTableModule } from '@angular/material/table';
import { UserRepository } from '../../core/user/repositories/user.repository';
import { UserService } from '../../core/user/services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { CreateUserTemplateComponent } from './create-user.template/create-user.template.component';
import { FormsModule } from '@angular/forms';
import { UpdateUserComponent } from './update-user/update-user.component';



@NgModule({
  providers:[{provide:UserRepository, useClass:UserService}],
  declarations: [
    TableListComponent,
    HomeComponent,HeaderComponent,FooterComponent, CreateUserTemplateComponent, UpdateUserComponent
  ],
  imports: [
    CommonModule,MatTableModule,HttpClientModule,FormsModule
  ],exports:[MatTableModule,TableListComponent,HeaderComponent,FooterComponent,FormsModule]
})
export class UserModule { }
