import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tzr-cmp-api-start-pricing',
  templateUrl: './api-start-pricing.component.html',
  styleUrls: ['../ui-components.component.scss']
})
export class ApiStartPricingComponent implements OnInit {

  @Output() planSelected = new EventEmitter<void>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
