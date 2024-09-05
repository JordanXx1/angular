import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
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

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'',component:CommonModule},
  {path:'',component:NavbarComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'developer',component:DeveloperComponent},
  {path:'developer2',component:Developer2Component},
  {path:'developer3',component:Developer3Component},
  {path:'developer4',component:Developer4Component},
  {path:'developer5',component:Developer5Component},
  {path:'developer6',component:Developer6Component},
  {path:'developer7',component:Developer7Component},
  {path:'developer8',component:Developer8Component},
  {path:'tester',component:TesterComponent},
  {path:'tester2',component:Tester2Component},
  {path:'tester3',component:Tester3Component},
  {path:'tester4',component:Tester4Component},
  {path:'tester5',component:Tester5Component},
  {path:'tester6',component:Tester6Component},
  {path:'tester7',component:Tester7Component},
  {path:'tester8',component:Tester8Component},
  {path:'finish',component:FinishComponent},
  
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
