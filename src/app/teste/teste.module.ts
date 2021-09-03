import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesteComponent } from './teste.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TesteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class TesteModule { }
