import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaRoutingModule } from './categoria-routing.module';
import { ListCategoriaComponent } from './list-categoria/list-categoria.component';
import { EditCategoriaComponent } from './edit-categoria/edit-categoria.component';
import { AddCategoriaComponent } from './add-categoria/add-categoria.component';




@NgModule({
  declarations: [ListCategoriaComponent, EditCategoriaComponent, AddCategoriaComponent],
  imports: [
    CommonModule,
    CategoriaRoutingModule
  ]
})
export class CategoriaModule { }
