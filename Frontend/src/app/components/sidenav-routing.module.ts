import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongsComponent } from './songs/songs.component';
import { InfoComponent } from './info/info.component';
import { UserComponent } from './user/user.component';
import { WrapperComponent } from './wrapper/wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      {
        path: 'songs',
        component: SongsComponent
      },
      {
        path: 'generations',
        component: InfoComponent
      },
      {
        path: 'Categories',
        component: UserComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/components',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SongsRoutingModule { }
