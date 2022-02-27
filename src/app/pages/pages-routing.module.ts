import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from "./pages.component";
import { MockPermissionsGuard } from "../guards/permissions.guard";


const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children:[
      {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
      },
      {
        path: 'welcome',
        loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule),
      },
      {
        path: 'users',
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
        canActivate: [MockPermissionsGuard]
      },
      {
        path: 'forbidden',
        loadChildren: () => import('./forbidden/forbidden.module').then(m => m.ForbiddenModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class PagesRoutingModule {
}
