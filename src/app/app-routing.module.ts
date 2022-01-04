import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntityModule } from './entities/entity.module';


const routes: Routes = [];

@NgModule({
  imports: [EntityModule, RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
