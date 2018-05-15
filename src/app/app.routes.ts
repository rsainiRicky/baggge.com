import { RouterModule, Routes } from '@angular/router';

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

export const appRoutes: Routes = [
    { path: 'mobile', component: MobilePageComponent  ,data: { state: 'home' } },
    { path: 'dth',      component: DthPageComponent, data: { state: 'dth' } },
    { path: 'datacard',      component: DatacardPageComponent },
    { path: 'electricity',      component: ElectricityPageComponent },
    { path: 'landline',      component: LandlinePageComponent },
    { path: 'broadband',      component: BroadbandPageComponent },
    { path: 'gas',      component: GasPageComponent },
    { path: 'water',      component: WaterPageComponent },
    { path: 'metro',      component: MetroPageComponent },
    { path: 'offers',      component: OffersPageComponent },
    
    { path: '',
      redirectTo: 'mobile',
      pathMatch: 'full'
    },
    { path: '**', component: PagenotFoundComponent }
  ];