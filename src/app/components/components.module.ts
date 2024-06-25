import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    UserDetailsComponent,
    FilterComponent,
    UserListComponent,
  ],
  imports : [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    UserDetailsComponent,
    FilterComponent,
    UserListComponent,
  ],
})
export class ComponentsModule { }
