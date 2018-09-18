import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetOfferComponent } from './asset-offer/asset-offer.component';
import { OtherRoutineComponent } from './other-routine/other-routine.component';

const routes: Routes = [
  { path: '', redirectTo: '/asset-offer', pathMatch: 'full' },
  { path: 'asset-offer', component: AssetOfferComponent },
  { path: 'other-routine', component: OtherRoutineComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
