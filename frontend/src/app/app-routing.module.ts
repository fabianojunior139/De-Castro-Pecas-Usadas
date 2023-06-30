import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guard/auth.guard';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AdmDashboardComponent } from './pages/adm-dashboard/adm-dashboard.component';
import { ListPartsComponent } from './pages/adm-dashboard/automotive-part/list-parts/list-parts.component';
import { RegisterPartsComponent } from './pages/adm-dashboard/automotive-part/register-parts/register-parts.component';
import { UpdatePartsComponent } from './pages/adm-dashboard/automotive-part/update-parts/update-parts.component';
import { ListSalesComponent } from './pages/adm-dashboard/sales/list-sales/list-sales.component';
import { CreateSalesComponent } from './pages/adm-dashboard/sales/create-sales/create-sales.component';
import { UpdateSalesComponent } from './pages/adm-dashboard/sales/update-sales/update-sales.component';
import { ListAnnouncementsComponent } from './pages/adm-dashboard/announcements/list-announcements/list-announcements.component';
import { RegisterAnnouncementsComponent } from './pages/adm-dashboard/announcements/register-announcements/register-announcements.component';
import { UpdateAnnouncementComponent } from './pages/adm-dashboard/announcements/update-announcement/update-announcement.component';
import { ListCarsComponent } from './pages/adm-dashboard/cars/list-cars/list-cars.component';
import { ListCarModelsComponent } from './pages/adm-dashboard/car-models/list-car-models/list-car-models.component';
import { CreateCarModelsComponent } from './pages/adm-dashboard/car-models/create-car-models/create-car-models.component';
import { UpdateCarModelsComponent } from './pages/adm-dashboard/car-models/update-car-models/update-car-models.component';
import { ListCarBrandsComponent } from './pages/adm-dashboard/car-brands/list-car-brands/list-car-brands.component';
import { RegisterCarBrandsComponent } from './pages/adm-dashboard/car-brands/register-car-brands/register-car-brands.component';
import { UpdateCarBrandsComponent } from './pages/adm-dashboard/car-brands/update-car-brands/update-car-brands.component';
import { ListUsersComponent } from './pages/adm-dashboard/users/list-users/list-users.component';
import { CreateUsersComponent } from './pages/adm-dashboard/users/create-users/create-users.component';
import { UpdateUsersComponent } from './pages/adm-dashboard/users/update-users/update-users.component';
import { FormCarsComponent } from './pages/adm-dashboard/cars/form-cars/form-cars.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },

  {
    path: 'dashboard',
    component: AdmDashboardComponent,
    children: [
      //peças automotivas = estoque
      { path: 'stock/list', component: ListPartsComponent },
      { path: 'stock/create', component: RegisterPartsComponent },
      { path: 'stock/update', component: UpdatePartsComponent },
      //vendas
      { path: 'sales/list', component: ListSalesComponent },
      { path: 'sales/create', component: CreateSalesComponent },
      { path: 'sales/update', component: UpdateSalesComponent },
      //Anúncios
      { path: 'announcements/list', component: ListAnnouncementsComponent },
      {
        path: 'announcements/create',
        component: RegisterAnnouncementsComponent,
      },
      { path: 'announcements/update', component: UpdateAnnouncementComponent },
      //Carros
      { path: 'cars/list', component: ListCarsComponent },
      { path: 'cars/create', component: FormCarsComponent },
      { path: 'cars/edit/:id', component: FormCarsComponent },
      //Modelo de carros
      { path: 'cars-models/list', component: ListCarModelsComponent },
      { path: 'cars-models/create', component: CreateCarModelsComponent },
      { path: 'cars-models/update', component: UpdateCarModelsComponent },
      //Marca de carros
      { path: 'cars-brands/list', component: ListCarBrandsComponent },
      { path: 'cars-brands/create', component: RegisterCarBrandsComponent },
      { path: 'cars-brands/update', component: UpdateCarBrandsComponent },
      //Usuários
      { path: 'users/list', component: ListUsersComponent },
      { path: 'users/create', component: CreateUsersComponent },
      { path: 'users/update', component: UpdateUsersComponent },
    ],
    canActivate: [AuthGuard],
  },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
