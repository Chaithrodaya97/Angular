import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GreetingComponent } from './greeting/greeting.component';
import { ProductListComponent } from './product-list/product-list.component';
import { DatepickerTestComponent } from './datepicker-test/datepicker-test.component';
import { TimepickerTestComponent } from './timepicker-test/timepicker-test.component';
import { RatingTestComponent } from './rating-test/rating-test.component';
import { SwitchTestComponent } from './switch-test/switch-test.component';
import { PipeTestComponent } from './pipe-test/pipe-test.component';
import { CarouselTestComponent } from './carousel-test/carousel-test.component';
import { ProductFormComponent } from './product-form/product-form.component';


const routes: Routes = [
  {path:'greet',component:GreetingComponent},
  {path:'product',component:ProductListComponent},
  {path:'date-picker',component:DatepickerTestComponent},
  {path:'time-picker',component:TimepickerTestComponent},
  {path:'rating',component:RatingTestComponent},
  {path:'switch',component:SwitchTestComponent},
  {path:'pipe',component:PipeTestComponent},
  {path:'carousel',component:CarouselTestComponent},
  {path:'product-form',component:ProductFormComponent},
  {path:'',redirectTo: '/greet',pathMatch:'full'}, //default
  {path:'**',redirectTo: '/greet',pathMatch:'full'} //wrong path

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule 
{



}
