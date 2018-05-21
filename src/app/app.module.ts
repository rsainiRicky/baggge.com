import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';

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
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { InfoComponent } from './components/info/info.component';
import { OfferComponent } from './components/offer/offer.component';
import { OfferCardComponent } from './components/offer-card/offer-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PreloaderComponent,
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
    PagenotFoundComponent,
    FooterComponent,
    SidebarComponent,
    InfoComponent,
    OfferComponent,
    OfferCardComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
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
