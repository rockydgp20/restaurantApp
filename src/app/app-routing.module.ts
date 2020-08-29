import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { LoginComponent } from './login/login.component';
import { UpdateRestaurantComponent } from './update-restaurant/update-restaurant.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'list', component: ListComponent},
  {path: 'add', component: AddRestaurantComponent},
  {path: 'update/:id', component: UpdateRestaurantComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
