import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { appRoutes } from './app.routes';
import { MobilePageComponent } from './pages/mobile-page/mobile.page.component';
import { DthPageComponent } from './pages/dth-page/dth.page.component';
import { DatacardPageComponent } from './pages/datacard-page/datacard.page.component';
import { ElectricityPageComponent } from './pages/electricity-page/electricity.page.component';
import { LandlinePageComponent } from './pages/landline-page/landline-page.component';
import { BroadbandPageComponent } from './pages/broadband-page/broadband-page.component';
import { GasPageComponent } from './pages/gas-page/gas-page.component';
import { WaterPageComponent } from './pages/water-page/water-page.component';
import { MetroPageComponent } from './pages/metro-page/metro-page.component';
import { OffersPageComponent } from './pages/offers-page/offers-page.component';
import { PagenotFoundComponent } from './pages/pagenot-found/pagenot-found.component';
import { MobileServiceService } from './services/mobile-service.service';

@NgModule({
  declarations: [
    AppComponent,
    // NavbarComponent,
    // PreloaderComponent,
    MobilePageComponent,
    DthPageComponent,
    DatacardPageComponent,
    ElectricityPageComponent,
    LandlinePageComponent,
    BroadbandPageComponent,
    GasPageComponent,
    WaterPageComponent,
    MetroPageComponent,
    OffersPageComponent,
    PagenotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MobileServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
