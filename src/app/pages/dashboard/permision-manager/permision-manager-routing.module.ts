import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermisionManagerComponent } from './permision-manager.component';

const routes: Routes = [
  {
    path: '',
    component: PermisionManagerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PermisionManagerRoutingModule {}
