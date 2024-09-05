import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DeveloperComponent } from './developer/developer.component';
import { Developer2Component } from './developer2/developer2.component';
import { Developer3Component } from './developer3/developer3.component';
import { Developer4Component } from './developer4/developer4.component';
import { Developer5Component } from './developer5/developer5.component';
import { Developer6Component } from './developer6/developer6.component';
import { Developer7Component } from './developer7/developer7.component';
import { Developer8Component } from './developer8/developer8.component';
import { TesterComponent } from './tester/tester.component';
import { Tester2Component } from './tester2/tester2.component';
import { Tester3Component } from './tester3/tester3.component';
import { Tester4Component } from './tester4/tester4.component';
import { Tester5Component } from './tester5/tester5.component';
import { Tester6Component } from './tester6/tester6.component';
import { Tester7Component } from './tester7/tester7.component';
import { Tester8Component } from './tester8/tester8.component';
import { FinishComponent } from './finish/finish.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    DeveloperComponent,
    Developer2Component,
    Developer3Component,
    Developer4Component,
    Developer5Component,
    Developer6Component,
    Developer7Component,
    Developer8Component,
    TesterComponent,
    Tester2Component,
    Tester3Component,
    Tester4Component,
    Tester5Component,
    Tester6Component,
    Tester7Component,
    Tester8Component,
    FinishComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
