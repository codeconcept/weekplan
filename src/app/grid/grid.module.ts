import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';

import { DragulaModule, DragulaService } from 'ng2-dragula/ng2-dragula';

@NgModule({
  imports: [
    CommonModule,
    DragulaModule
  ],
  declarations: [GridComponent],
  exports: [GridComponent],
  providers: [DragulaService]
})
export class GridModule { }
