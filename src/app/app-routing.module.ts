import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';

const appRoutes: Routes = [
  {
    path: "home",
    component:HomeComponent,
    data: {
      title: "Home",
    },
    canActivate: [],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
