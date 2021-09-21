import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tzr-cmp-enterprise-pricing',
  templateUrl: './enterprise-pricing.component.html',
  styleUrls: ['../ui-components.component.scss']
})
export class EnterprisePricingComponent implements OnInit {

  @Output() planSelected = new EventEmitter<void>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
