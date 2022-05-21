import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MusicDetailsModule} from './modules/music-details/music-details.module';
import {AddNewMusicModule} from './modules/add-new-music/add-new-music.module';
import {MusicListModule} from './modules/music-list/music-list.module';
import {MatButtonModule} from "@angular/material/button";
import {UpdateMusicModule} from "./modules/update-music/update-music.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MusicDetailsModule,
    AddNewMusicModule,
    MusicListModule,
    UpdateMusicModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
