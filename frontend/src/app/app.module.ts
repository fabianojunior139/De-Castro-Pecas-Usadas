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
import { SalesComponent } from './pages/adm-dashboard/sales/sales.component';
import { AutomotivePartComponent } from './pages/adm-dashboard/automotive-part/automotive-part.component';
import { AnnouncementsComponent } from './pages/adm-dashboard/announcements/announcements.component';
import { CarsComponent } from './pages/adm-dashboard/cars/cars.component';
import { CarModelsComponent } from './pages/adm-dashboard/car-models/car-models.component';
import { CarBrandsComponent } from './pages/adm-dashboard/car-brands/car-brands.component';
import { UsersComponent } from './pages/adm-dashboard/users/users.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Material
import { materialModules } from './material-modules';
import { BodyComponent } from './components/body/body.component';

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
    SalesComponent,
    AutomotivePartComponent,
    AnnouncementsComponent,
    CarsComponent,
    CarModelsComponent,
    CarBrandsComponent,
    UsersComponent,
    BodyComponent,
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
