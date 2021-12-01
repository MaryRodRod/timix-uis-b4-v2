import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddSongsComponent } from './add-songs/add-songs.component';
import { LoginComponent } from './login/login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { UserIndexComponent } from './user-index/user-index.component';

import {MatInputModule} from '@angular/material/input';

// plantilla


import { AuthStaticEffects } from './store/effects/static/user.effects';
import { PlaylistStaticEffects } from './store/effects/static/playlist.effects';
import { PlaylistEffects } from './store/effects/firebase/playlist.effects';
import { ArtistsEffects } from './store/effects/firebase/artists.effects';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';

import 'hammerjs';
// import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment, firebase, staticData } from '../environments/environment';

import { SharedModule } from './shared/shared.module';

import { reducers, initialState } from './store/index';
import { AuthEffects } from './store/effects/firebase/user.effects';

import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { PlaylistCreateComponent } from './components/playlist-create/playlist-create.component';
import { PlaylistAddSongComponent } from './components/playlist-add-song/playlist-add-song.component';
import { ArtistsStaticEffects } from './store/effects/static/artists.effects';





@NgModule({
  declarations: [
    AppComponent,
    AddSongsComponent,
    LoginComponent,
    UserRegisterComponent,
    AdminRegisterComponent,
    UserIndexComponent,
    HeaderComponent,
    SidebarComponent,


  ],
  entryComponents: [
    PlaylistCreateComponent,
    PlaylistAddSongComponent,
  ],

  imports: [
    BrowserModule,

    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule.forRoot(),


    EffectsModule.forRoot([
      staticData ? AuthStaticEffects : AuthEffects,
      staticData ? ArtistsStaticEffects : ArtistsEffects,
      staticData ? PlaylistStaticEffects : PlaylistEffects,
    ]),
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forRoot({
      router: routerReducer,
    })

  ],

  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

