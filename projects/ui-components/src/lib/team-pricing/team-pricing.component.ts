import { Component } from '@angular/core';
import { BasePricingComponent } from '../base-pricing/base-pricing.component';

@Component({
  selector: 'tzr-cmp-team-pricing',
  templateUrl: './team-pricing.component.html',
  styleUrls: ['../base-pricing/base-pricing.component.scss']
})
export class TeamPricingComponent extends BasePricingComponent {

  constructor() { 
    super();
  }

}
