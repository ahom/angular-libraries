import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tzr-cmp-team-pricing',
  templateUrl: './team-pricing.component.html',
  styleUrls: ['../ui-components.component.scss']
})
export class TeamPricingComponent implements OnInit {

  @Output() planSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

}
