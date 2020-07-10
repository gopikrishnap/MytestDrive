import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderSalesdrveComponent } from './header-salesdrve/header-salesdrve.component';
import { OpportunitiesComponent } from './opportunities/opportunities.component';
import { TestheadComponent } from './Login-page/testhead.component';

const routes: Routes = [
  // { path: '', redirectTo: 'leadinfo', pathMatch: 'full' },
  // { path: 'Headsaledrive', component: HeaderSalesdrveComponent },
  // {path:'Opportunities',component:OpportunitiesComponent},
  // {path:'test',component:TestheadComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
