import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TreeComponent } from './pages/tree/tree.component';
import { TreeResolver } from './services/tree.resolver';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'tree/:id', component: TreeComponent, resolve:{tree:TreeResolver}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
