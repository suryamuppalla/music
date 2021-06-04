import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MusicDetailsComponent} from './music-details.component';
import {HttpClientModule} from "@angular/common/http";
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {RouterModule} from "@angular/router";

describe('MusicDetailsComponent', () => {
  let component: MusicDetailsComponent;
  let fixture: ComponentFixture<MusicDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MusicDetailsComponent],
      imports: [
        HttpClientModule,
        MatDialogModule,
        MatSnackBarModule,
        RouterModule.forRoot([])
      ],
      providers: [
        {provide: MAT_DIALOG_DATA, useValue: {}},
        {provide: MatDialogRef, useValue: {}}
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
