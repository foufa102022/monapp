import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApprareilsComponent } from './apprareils/apprareils.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'/appareils',component:ApprareilsComponent},
  {path:'/contact',component:ContactComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
