import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tzr-cmp-solo-pricing',
  templateUrl: './solo-pricing.component.html',
  styleUrls: ['../ui-components.component.scss']
})
export class SoloPricingComponent implements OnInit {

  @Output() planSelected = new EventEmitter<void>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
