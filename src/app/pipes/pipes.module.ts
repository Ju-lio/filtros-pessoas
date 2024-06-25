import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonePipe } from './phone.pipe';
import { AtivoPipe } from './ativo.pipe';
import { DatePipe } from './date.pipe';
import { EnderecoPipe } from './endereco.pipe';

@NgModule({
  declarations: [
    PhonePipe,
    AtivoPipe,
    DatePipe,
    EnderecoPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PhonePipe,
    AtivoPipe,
    DatePipe,
    EnderecoPipe,
  ],
})
export class PipesModule { }
