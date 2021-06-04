import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AddNewMusicComponent} from './add-new-music.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {RouterModule} from "@angular/router";

describe('AddNewMusicComponent', () => {
  let component: AddNewMusicComponent;
  let fixture: ComponentFixture<AddNewMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddNewMusicComponent],
      imports: [
        FormsModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatSnackBarModule,
        RouterModule.forRoot([])
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewMusicComponent);
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

  it('File field validity', () => {
    let name = component.form.controls['file'];
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
