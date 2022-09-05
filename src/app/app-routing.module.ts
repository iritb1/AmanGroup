import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokeTableComponent } from './joke-table/joke-table.component';
import { LoginComponent } from './login/login.component'

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'jokes', component:JokeTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
