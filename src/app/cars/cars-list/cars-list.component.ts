import { Component, OnInit, ViewChild, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CarsService } from '../cars.service';
import { Car } from '../models/car';
import { TotalCostComponent } from '../total-cost/total-cost.component';

@Component({
  selector: 'cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class CarsListComponent implements OnInit, AfterViewInit {
  @ViewChild("totalCostRef") totalCostRef: TotalCostComponent;
  totalCost: number;
  grossCost: number;
  carForm: FormGroup;

  cars: Car[];

  constructor(private carsService: CarsService,
    private formBuilder: FormBuilder,
    private router: Router
    ) { }

  ngOnInit() {
    this.loadCars();
    this.carForm=this.buildCarForm();
  }

  buildCarForm() {
    return this.formBuilder.group({
      model: '',
      type: '',
      plate: '',
      deliveryDate: '',
      deadline: '',
      color: '',
      power: '',
      clientFirstName: '',
      clientSurName: '',
      cost: '',
      isFullyDamaged: ''
    });
  }

  goToCarDetails(car: Car) {
    this.router.navigate(['/cars', car.id])
  }


  loadCars(): void {
    this.carsService.getCars().subscribe((cars) => {
      this.cars = cars;
      this.countTotalCost();
    })
  }

  ngAfterViewInit() {
    this.totalCostRef.showGross();
  }

  shownGross(): void {
    this.totalCostRef.showGross();
  }

  countTotalCost(): void {
    this.totalCost = this.cars
      .map((car) => car.cost) //[300,400,600]
      .reduce((prev, next) => prev + next);
  }

  onShownGross(grossCost: number): void {
    this.grossCost = grossCost
  }
}
