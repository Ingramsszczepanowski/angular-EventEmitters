import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';


const routes: Routes = [
  { path :  'Parent',component: ParentComponent},
  { path :  'Child',component: ChildComponent},
  { path :  'App',component: AppComponent},
  { path :  '**', redirectTo: 'Parent'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModuleModule { }
export const routingComponents = [AppComponent, ParentComponent,ChildComponent]