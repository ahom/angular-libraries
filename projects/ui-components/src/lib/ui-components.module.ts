import { NgModule } from '@angular/core';
import { UiComponentsComponent } from './ui-components.component';
import { SoloPricingComponent } from './solo-pricing/solo-pricing.component';
import { TeamPricingComponent } from './team-pricing/team-pricing.component';
import { EnterprisePricingComponent } from './enterprise-pricing/enterprise-pricing.component';
import { ApiStartPricingComponent } from './api-start-pricing/api-start-pricing.component';
import { ApiEnterprisePricingComponent } from './api-enterprise-pricing/api-enterprise-pricing.component';



@NgModule({
  declarations: [
    UiComponentsComponent,
    SoloPricingComponent,
    TeamPricingComponent,
    EnterprisePricingComponent,
    ApiStartPricingComponent,
    ApiEnterprisePricingComponent
  ],
  imports: [
  ],
  exports: [
    UiComponentsComponent,
    SoloPricingComponent,
    TeamPricingComponent,
    EnterprisePricingComponent,
    ApiStartPricingComponent,
    ApiEnterprisePricingComponent
  ]
})
export class UiComponentsModule { }
