import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guard/auth.guard';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AdmDashboardComponent } from './pages/adm-dashboard/adm-dashboard.component';
import { ListPartsComponent } from './pages/adm-dashboard/automotive-part/list-parts/list-parts.component';
import { ListSalesComponent } from './pages/adm-dashboard/sales/list-sales/list-sales.component';
import { CreateSalesComponent } from './pages/adm-dashboard/sales/create-sales/create-sales.component';
import { UpdateSalesComponent } from './pages/adm-dashboard/sales/update-sales/update-sales.component';
import { ListAnnouncementsComponent } from './pages/adm-dashboard/announcements/list-announcements/list-announcements.component';
import { RegisterAnnouncementsComponent } from './pages/adm-dashboard/announcements/register-announcements/register-announcements.component';
import { UpdateAnnouncementComponent } from './pages/adm-dashboard/announcements/update-announcement/update-announcement.component';
import { ListCarsComponent } from './pages/adm-dashboard/cars/list-cars/list-cars.component';
import { ListCarModelsComponent } from './pages/adm-dashboard/car-models/list-car-models/list-car-models.component';
import { ListCarBrandsComponent } from './pages/adm-dashboard/car-brands/list-car-brands/list-car-brands.component';
import { ListUsersComponent } from './pages/adm-dashboard/users/list-users/list-users.component';
import { FormCarsComponent } from './pages/adm-dashboard/cars/form-cars/form-cars.component';
import { FormUsersComponent } from './pages/adm-dashboard/users/form-users/form-users.component';
import { FormCarModelsComponent } from './pages/adm-dashboard/car-models/form-car-models/form-car-models.component';
import { FormCarBrandsComponent } from './pages/adm-dashboard/car-brands/form-car-brands/form-car-brands.component';
import { FormPartsComponent } from './pages/adm-dashboard/automotive-part/form-parts/form-parts.component';
import { PartInformationsComponent } from './pages/adm-dashboard/automotive-part/part-informations/part-informations.component';

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
      { path: 'stock/create', component: FormPartsComponent },
      { path: 'stock/informations/:id', component: PartInformationsComponent },
      { path: 'stock/edit/:id', component: FormPartsComponent },
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
      { path: 'car-models/list', component: ListCarModelsComponent },
      { path: 'car-models/create', component: FormCarModelsComponent },
      { path: 'car-models/edit/:id', component: FormCarModelsComponent },
      //Marca de carros
      { path: 'car-brands/list', component: ListCarBrandsComponent },
      { path: 'car-brands/create', component: FormCarBrandsComponent },
      { path: 'car-brands/edit/:id', component: FormCarBrandsComponent },
      //Usuários
      { path: 'users/list', component: ListUsersComponent },
      { path: 'users/create', component: FormUsersComponent },
      { path: 'users/edit/:id', component: FormUsersComponent },
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
