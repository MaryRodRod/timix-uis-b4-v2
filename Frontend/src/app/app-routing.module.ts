import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSongsComponent } from './add-songs/add-songs.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{ path:'add', component: AddSongsComponent},
                        { path:'login', component: LoginComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



