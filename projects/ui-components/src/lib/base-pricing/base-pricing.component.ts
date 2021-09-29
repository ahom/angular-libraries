import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-base-pricing',
  template: '',
  styleUrls: ['./base-pricing.component.scss']
})
export class BasePricingComponent implements OnInit {

  @Input() link!: string;
  @Input() btnText!: string;
  @Output() planClicked = new EventEmitter<void>();
  public isBtnUsed = false;

  constructor() { 
  }

  ngOnInit(): void {
    this.isBtnUsed = this.planClicked.observers.length > 0;
  }

}
