import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderSalesdrveComponent } from './header-salesdrve/header-salesdrve.component';
import { OpportunitiesComponent } from './opportunities/opportunities.component';
import { TestheadComponent } from './Login-page/testhead.component';
import { EventsComponent } from './events/events.component';
import { AllbuttonsComponent } from './allbuttons/allbuttons.component';

const routes: Routes = [
  // { path: '', redirectTo: 'leadinfo', pathMatch: 'full' },
  { path: 'Headsaledrive', component: HeaderSalesdrveComponent },
  {path:'Opportunities',component:OpportunitiesComponent},
  {path:'test',component:TestheadComponent},
  {path:'event',component:EventsComponent},
  {path:'allbuttons',component:AllbuttonsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
