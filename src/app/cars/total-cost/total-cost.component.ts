import { Component, Input, OnInit, Output,EventEmitter, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'cs-total-cost',
  templateUrl: './total-cost.component.html',
  styleUrls: ['./total-cost.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TotalCostComponent implements OnInit {
  @Input() totalCost: number;
  @Output() shownGross: EventEmitter<number> = new EventEmitter<number>();
  private VAT: number = 1.23;

  showGross():void{
    this.shownGross.emit(this.totalCost*this.VAT);
  }
  
  ngOnInit() {
  }

}
