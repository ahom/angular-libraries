import { Component } from '@angular/core';
import { BasePricingComponent } from '../base-pricing/base-pricing.component';

@Component({
  selector: 'tzr-cmp-solo-pricing',
  templateUrl: './solo-pricing.component.html',
  styleUrls: ['../base-pricing/base-pricing.component.scss']
})
export class SoloPricingComponent extends BasePricingComponent  {
  // export class SoloPricingComponent implements OnInit {
  
  // @Input() link!: string;
  // @Input() btnText!: string;
  // @Output() planClicked = new EventEmitter<void>();
  // public isBtnUsed = false;
 
  constructor() { 
    super();
  }

  // ngOnInit(): void {
  //   this.isBtnUsed = this.planClicked.observers.length > 0;
  // }

}
