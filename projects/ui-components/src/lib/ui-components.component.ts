import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ui-components',
  template: `
    <p>
      ui-components works!
    </p>
  `,
  styles: [ './ui-components.component.scss']
})
export class UiComponentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
