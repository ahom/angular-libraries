import { Component } from '@angular/core';
import { BasePricingComponent } from '../base-pricing/base-pricing.component';

@Component({
  selector: 'tzr-cmp-api-enterprise-pricing',
  templateUrl: './api-enterprise-pricing.component.html',
  styleUrls: ['../base-pricing/base-pricing.component.scss']
})
export class ApiEnterprisePricingComponent extends BasePricingComponent {
  
  constructor() {
    super();
  }

}
