import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderSalesdrveComponent } from './header-salesdrve/header-salesdrve.component';
import { OpportunitiesComponent } from './opportunities/opportunities.component';
import { TestheadComponent } from './Login-page/testhead.component';
import { EventsComponent } from './events/events.component';
import { AllbuttonsComponent } from './allbuttons/allbuttons.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderSalesdrveComponent,
    OpportunitiesComponent,
    TestheadComponent,
    EventsComponent,
    AllbuttonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
