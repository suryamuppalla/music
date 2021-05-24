import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateMusicComponent } from './update-music/update-music.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {ConfirmDialogModule} from "../confirm-dialog/confirm-dialog.module";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";



@NgModule({
  declarations: [
    UpdateMusicComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    ConfirmDialogModule,
    MatDialogModule,
    MatButtonModule,
    RouterModule,
    MatProgressSpinnerModule
  ]
})
export class UpdateMusicModule { }
