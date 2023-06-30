import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {  } from 'simple-ng-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
// import { LoaderComponent } from './loader/loader.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SharedmoduleModule } from 'src/sharedmodule/sharedmodule.module';
// import { RegisterComponent } from './pages/auth/register/register.component';
// import { UserComponent } from './pages/dashboard/user/user.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // BrowserAnimationsModule,
    NgxSpinnerModule,
    SharedmoduleModule,
  ],
  exports: [SharedmoduleModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
