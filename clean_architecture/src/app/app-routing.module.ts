import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './ui/user/pages/home/home.component';
import { CreateUserTemplateComponent } from './ui/user/create-user.template/create-user.template.component';



const routes: Routes = [
  {path:'',component:HomeComponent},{
    path:'create-user',component:CreateUserTemplateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
