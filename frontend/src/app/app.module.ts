import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CardComponent } from './components/card/card.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AdmDashboardComponent } from './pages/adm-dashboard/adm-dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BodyComponent } from './components/body/body.component';
import { SublevelMenuComponent } from './components/sidenav/sublevel-menu.component';
import { ListAnnouncementsComponent } from './pages/adm-dashboard/announcements/list-announcements/list-announcements.component';
import { RegisterAnnouncementsComponent } from './pages/adm-dashboard/announcements/register-announcements/register-announcements.component';
import { UpdateAnnouncementComponent } from './pages/adm-dashboard/announcements/update-announcement/update-announcement.component';
import { ListPartsComponent } from './pages/adm-dashboard/automotive-part/list-parts/list-parts.component';
import { RegisterPartsComponent } from './pages/adm-dashboard/automotive-part/register-parts/register-parts.component';
import { UpdatePartsComponent } from './pages/adm-dashboard/automotive-part/update-parts/update-parts.component';
import { ListCarBrandsComponent } from './pages/adm-dashboard/car-brands/list-car-brands/list-car-brands.component';
import { RegisterCarBrandsComponent } from './pages/adm-dashboard/car-brands/register-car-brands/register-car-brands.component';
import { UpdateCarBrandsComponent } from './pages/adm-dashboard/car-brands/update-car-brands/update-car-brands.component';
import { DeleteCarBrandsComponent } from './pages/adm-dashboard/car-brands/delete-car-brands/delete-car-brands.component';
import { DeleteCarModelsComponent } from './pages/adm-dashboard/car-models/delete-car-models/delete-car-models.component';
import { CreateCarModelsComponent } from './pages/adm-dashboard/car-models/create-car-models/create-car-models.component';
import { ListCarModelsComponent } from './pages/adm-dashboard/car-models/list-car-models/list-car-models.component';
import { UpdateCarModelsComponent } from './pages/adm-dashboard/car-models/update-car-models/update-car-models.component';
import { UpdateCarsComponent } from './pages/adm-dashboard/cars/update-cars/update-cars.component';
import { ListCarsComponent } from './pages/adm-dashboard/cars/list-cars/list-cars.component';
import { DeleteCarsComponent } from './pages/adm-dashboard/cars/delete-cars/delete-cars.component';
import { CreateCarsComponent } from './pages/adm-dashboard/cars/create-cars/create-cars.component';
import { CreateSalesComponent } from './pages/adm-dashboard/sales/create-sales/create-sales.component';
import { UpdateSalesComponent } from './pages/adm-dashboard/sales/update-sales/update-sales.component';
import { ListSalesComponent } from './pages/adm-dashboard/sales/list-sales/list-sales.component';
import { ListUsersComponent } from './pages/adm-dashboard/users/list-users/list-users.component';
import { UpdateUsersComponent } from './pages/adm-dashboard/users/update-users/update-users.component';
import { CreateUsersComponent } from './pages/adm-dashboard/users/create-users/create-users.component';
import { DeleteUsersComponent } from './pages/adm-dashboard/users/delete-users/delete-users.component';

// Material
import { materialModules } from './material-modules';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    PageNotFoundComponent,
    CardComponent,
    SidenavComponent,
    AdmDashboardComponent,
    BodyComponent,
    SublevelMenuComponent,
    ListAnnouncementsComponent,
    RegisterAnnouncementsComponent,
    UpdateAnnouncementComponent,
    ListPartsComponent,
    RegisterPartsComponent,
    UpdatePartsComponent,
    ListCarBrandsComponent,
    RegisterCarBrandsComponent,
    UpdateCarBrandsComponent,
    DeleteCarBrandsComponent,
    DeleteCarModelsComponent,
    CreateCarModelsComponent,
    ListCarModelsComponent,
    UpdateCarModelsComponent,
    UpdateCarsComponent,
    ListCarsComponent,
    DeleteCarsComponent,
    CreateCarsComponent,
    CreateSalesComponent,
    UpdateSalesComponent,
    ListSalesComponent,
    ListUsersComponent,
    UpdateUsersComponent,
    CreateUsersComponent,
    DeleteUsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    ...materialModules,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
