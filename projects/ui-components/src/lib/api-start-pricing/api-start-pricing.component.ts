import { Component } from '@angular/core';
import { BasePricingComponent } from '../base-pricing/base-pricing.component';

@Component({
  selector: 'tzr-cmp-api-start-pricing',
  templateUrl: './api-start-pricing.component.html',
  styleUrls: ['../base-pricing/base-pricing.component.scss']
})
export class ApiStartPricingComponent extends BasePricingComponent {

  constructor() {
    super();
  }

}
