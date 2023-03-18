import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './compoent/dashboard/dashboard.component';
import { TestComponent } from './compoent/test/test.component';

const appRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  { path: 'test', component: TestComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule,RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
