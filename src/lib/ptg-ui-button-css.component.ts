import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'lib-ptg-ui-button-css',
  templateUrl: './ptgui-button.component.html',
  styles: [],
  host: {
    '[tabindex]': 'disabled ? -1 : 0',
    '(keydown)': 'handleKeyDown($event)',
  },
})
export class PtgUiButtonCssComponent implements OnInit {
  @Input() type: any = 'button';
  @Input() btnStyleType: any;
  @Input() isDisable = false;
  @Input() isBlock = false;
  @Input() accessKey = '';
  @ViewChild('button', { static: true }) button!: ElementRef;

  ngOnInit(): void {
    // this.button.nativeElement.accessKey = this.accessKey;
  }

  handleKeyDown(event: KeyboardEvent) {
    switch (event.which) {
      case 13:
        this.button.nativeElement.click();
        break;
      default:
        return;
    }
  }
}
