import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { CarsService } from "./cars.service";
import { Car } from "./models/car";

@Injectable()
export class CarResolve implements Resolve<Car> {
    constructor(private carsService:CarsService){}

    resolve(route:ActivatedRouteSnapshot){
        return this.carsService.getCar(route.params['id'])
    }
}