import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tzr-cmp-api-enterprise-pricing',
  templateUrl: './api-enterprise-pricing.component.html',
  styleUrls: ['../ui-components.component.css']
})
export class ApiEnterprisePricingComponent implements OnInit {

  @Output() planSelected = new EventEmitter<void>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
