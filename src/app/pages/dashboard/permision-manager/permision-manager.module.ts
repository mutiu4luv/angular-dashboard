import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermisionManagerRoutingModule } from './permision-manager-routing.module';
import { PermisionManagerComponent } from './permision-manager.component';


@NgModule({
  declarations: [
    PermisionManagerComponent
  ],
  imports: [
    CommonModule,
    PermisionManagerRoutingModule
  ]
})
export class PermisionManagerModule { }
