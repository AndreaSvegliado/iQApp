
import { NgModule } from '@angular/core';

import { MatButtonModule, MatIconModule, MatTableModule } from '@angular/material';

const MaterialComponents = [
  MatButtonModule,
  MatIconModule
  //,MatTableModule
];


@NgModule({
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }

 
//https://material.io/resources/icons/?style=baseline