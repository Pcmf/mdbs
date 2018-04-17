import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { FeaturesComponent } from './features/features.component';
import { RouterModule,Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';

const appRoutes:Routes = [
  {path:'home',component:HomeComponent},
  {path:'features',component:FeaturesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
