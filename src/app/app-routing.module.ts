import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkboardComponent } from './components/workboard/workboard.component';

const routes: Routes = [
  { path: '', component: WorkboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
