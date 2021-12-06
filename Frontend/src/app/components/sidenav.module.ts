import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongsRoutingModule } from './sidenav-routing.module';
import { WrapperComponent } from '../components/wrapper/wrapper.component';
import { SongsComponent } from './songs/songs.component';
import { InfoComponent } from '../components/info/info.component';
import { UserComponent } from '../components/user/user.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [WrapperComponent, SongsComponent, InfoComponent, UserComponent],
  imports: [
    CommonModule,
    SongsRoutingModule,

    // NG Material Modules
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule
  ]
})
export class SidenavModule { }

