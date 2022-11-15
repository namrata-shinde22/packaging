import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PtgUiButtonCssComponent } from './ptg-ui-button-css.component';

@NgModule({
  declarations: [PtgUiButtonCssComponent],
  imports: [FormsModule, CommonModule],
  exports: [PtgUiButtonCssComponent],
})
export class PtgUiButtonCssModule {}
