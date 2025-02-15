import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { UiComponentsComponent } from './ui-components.component';
import { SoloPricingComponent } from './solo-pricing/solo-pricing.component';
import { TeamPricingComponent } from './team-pricing/team-pricing.component';
import { EnterprisePricingComponent } from './enterprise-pricing/enterprise-pricing.component';
import { ApiStartPricingComponent } from './api-start-pricing/api-start-pricing.component';
import { ApiEnterprisePricingComponent } from './api-enterprise-pricing/api-enterprise-pricing.component';
import { BasePricingComponent } from './base-pricing/base-pricing.component';


@NgModule({
  declarations: [
    UiComponentsComponent,
    SoloPricingComponent,
    TeamPricingComponent,
    EnterprisePricingComponent,
    ApiStartPricingComponent,
    ApiEnterprisePricingComponent,
    BasePricingComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
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
