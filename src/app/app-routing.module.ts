import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooComponent } from './foo/foo.component';

export const routes: Routes = [
  {
    path: 'foo',
    loadComponent: () => import('./foo/foo.component').then((m) => m.FooComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
