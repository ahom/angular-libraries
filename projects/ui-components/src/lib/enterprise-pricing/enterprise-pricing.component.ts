import { Component } from '@angular/core';
import { BasePricingComponent } from '../base-pricing/base-pricing.component';

@Component({
  selector: 'tzr-cmp-enterprise-pricing',
  templateUrl: './enterprise-pricing.component.html',
  styleUrls: ['../base-pricing/base-pricing.component.scss']
})
export class EnterprisePricingComponent extends BasePricingComponent {

  constructor() { 
    super();
  }
  
}
