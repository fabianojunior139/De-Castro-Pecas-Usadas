import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { CardComponent } from './components/card/card.component';
import { httpInterceptorProviders } from './components/http-interceptors';
import { NavbarAdmComponent } from './components/navbar-adm/navbar-adm.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PartsCardComponent } from './components/parts-card/parts-card.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SublevelMenuComponent } from './components/sidenav/sublevel-menu.component';
import { materialModules } from './material-modules';
import { AdmDashboardComponent } from './pages/adm-dashboard/adm-dashboard.component';
import { ListAnnouncementsComponent } from './pages/adm-dashboard/announcements/list-announcements/list-announcements.component';
import { RegisterAnnouncementsComponent } from './pages/adm-dashboard/announcements/register-announcements/register-announcements.component';
import { UpdateAnnouncementComponent } from './pages/adm-dashboard/announcements/update-announcement/update-announcement.component';
import { ListPartsComponent } from './pages/adm-dashboard/automotive-part/list-parts/list-parts.component';
import { ListCarBrandsComponent } from './pages/adm-dashboard/car-brands/list-car-brands/list-car-brands.component';
import { ListCarModelsComponent } from './pages/adm-dashboard/car-models/list-car-models/list-car-models.component';
import { ListCarsComponent } from './pages/adm-dashboard/cars/list-cars/list-cars.component';
import { CreateSalesComponent } from './pages/adm-dashboard/sales/create-sales/create-sales.component';
import { ListSalesComponent } from './pages/adm-dashboard/sales/list-sales/list-sales.component';
import { UpdateSalesComponent } from './pages/adm-dashboard/sales/update-sales/update-sales.component';
import { ListUsersComponent } from './pages/adm-dashboard/users/list-users/list-users.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { FiltersPipe } from './pipes/filters.pipe';
import { FormCarsComponent } from './pages/adm-dashboard/cars/form-cars/form-cars.component';
import { FormUsersComponent } from './pages/adm-dashboard/users/form-users/form-users.component';
import { FormCarModelsComponent } from './pages/adm-dashboard/car-models/form-car-models/form-car-models.component';
import { FormCarBrandsComponent } from './pages/adm-dashboard/car-brands/form-car-brands/form-car-brands.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { FormPartsComponent } from './pages/adm-dashboard/automotive-part/form-parts/form-parts.component';

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
    ListCarBrandsComponent,
    ListCarModelsComponent,
    ListCarsComponent,
    CreateSalesComponent,
    UpdateSalesComponent,
    ListSalesComponent,
    ListUsersComponent,
    NavbarAdmComponent,
    PartsCardComponent,
    FiltersPipe,
    FormCarsComponent,
    FormUsersComponent,
    FormCarModelsComponent,
    FormCarBrandsComponent,
    ConfirmDialogComponent,
    FormPartsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    FormsModule,
    ...materialModules,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
