import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UpdateMusicComponent} from './update-music.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {ConfirmDialogModule} from "../../confirm-dialog/confirm-dialog.module";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material/snack-bar";

describe('UpdateMusicComponent', () => {
  let component: UpdateMusicComponent;
  let fixture: ComponentFixture<UpdateMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateMusicComponent],
      imports: [
        ReactiveFormsModule,
        MatCardModule,
        ConfirmDialogModule,
        MatDialogModule,
        MatButtonModule,
        RouterModule.forRoot([]),
        HttpClientModule,
        MatSnackBarModule,
        MatProgressSpinnerModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMusicComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('Title field validity', () => {
    let name = component.form.controls['title'];
    expect(name.valid).toBeFalsy();

    name.setValue(null);
    expect(name.hasError('required')).toBeTruthy();
  });

  it('Description field validity', () => {
    let name = component.form.controls['description'];
    expect(name.valid).toBeFalsy();

    name.setValue(null);
    expect(name.hasError('required')).toBeTruthy();
  });


  it('Author field validity', () => {
    let name = component.form.controls['author'];
    expect(name.valid).toBeFalsy();

    name.setValue(null);
    expect(name.hasError('required')).toBeTruthy();
  });

  it('Rating field validity', () => {
    let name = component.form.controls['rating'];
    expect(name.valid).toBeFalsy();

    name.setValue(null);
    expect(name.hasError('required')).toBeTruthy();
  });

  it('Language field validity', () => {
    let name = component.form.controls['language'];
    expect(name.valid).toBeFalsy();

    name.setValue(null);
    expect(name.hasError('required')).toBeTruthy();
  });
});
