import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsListComponent } from './cars-list/cars-list.component';
import { TotalCostComponent } from './total-cost/total-cost.component';
import { SharedModule } from '../shared-module/shared.module';
import { CarDetailsComponent } from './car-details/car-details.component';
import { RouterModule } from '@angular/router';
import { CarResolve } from './car-resolve';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ],
  exports:[CarsListComponent],
  providers:[
    CarResolve
  ],
  declarations: [CarsListComponent, TotalCostComponent, CarDetailsComponent]
})
export class CarsModule { }
