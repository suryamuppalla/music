import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MusicDetailsComponent} from './music-details/music-details.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    MusicDetailsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    RouterModule
  ]
})
export class MusicDetailsModule {
}
