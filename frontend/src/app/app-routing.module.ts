import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guard/auth.guard';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AdmDashboardComponent } from './pages/adm-dashboard/adm-dashboard.component';
import { SalesComponent } from './pages/adm-dashboard/sales/sales.component';
import { AutomotivePartComponent } from './pages/adm-dashboard/automotive-part/automotive-part.component';
import { AnnouncementsComponent } from './pages/adm-dashboard/announcements/announcements.component';
import { CarsComponent } from './pages/adm-dashboard/cars/cars.component';
import { CarModelsComponent } from './pages/adm-dashboard/car-models/car-models.component';
import { CarBrandsComponent } from './pages/adm-dashboard/car-brands/car-brands.component';
import { UsersComponent } from './pages/adm-dashboard/users/users.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },

  {
    path: 'dashboard',
    component: AdmDashboardComponent,
    children: [
      { path: 'stock', component: AutomotivePartComponent },
      { path: 'sales', component: SalesComponent },
      { path: 'announcements', component: AnnouncementsComponent },
      { path: 'cars', component: CarsComponent },
      { path: 'cars-models', component: CarModelsComponent },
      { path: 'cars-brands', component: CarBrandsComponent },
      { path: 'users', component: UsersComponent },
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
