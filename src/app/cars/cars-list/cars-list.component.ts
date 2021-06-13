import { Component, OnInit, ViewChild, ViewEncapsulation,AfterViewInit } from '@angular/core';
import { CarsService } from '../cars.service';
import { Car } from '../models/car';
import { TotalCostComponent } from '../total-cost/total-cost.component';

@Component({
  selector: 'cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.less'],
  encapsulation:ViewEncapsulation.None
})
export class CarsListComponent implements OnInit,AfterViewInit {
  @ViewChild("totalCostRef") totalCostRef:TotalCostComponent;
totalCost:number;
grossCost:number;

 cars: Car[];

  constructor(private carsService:CarsService) { }

  ngOnInit() {
    this.loadCars();
  }
  loadCars(): void{
    this.carsService.getCars().subscribe((cars)=>{
      this.cars=cars;
      this.countTotalCost();
    })
  }

  ngAfterViewInit(){
    this.totalCostRef.showGross();
  }

  shownGross():void{
    this.totalCostRef.showGross();
  }

countTotalCost():void{
  this.totalCost=this.cars
  .map((car)=>car.cost) //[300,400,600]
  .reduce((prev,next)=>prev + next);
}

onShownGross(grossCost:number):void{
 this.grossCost = grossCost
}
}
