import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MusicListComponent} from './music-list.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

describe('MusicListComponent', () => {
  let component: MusicListComponent;
  let fixture: ComponentFixture<MusicListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MusicListComponent],
      imports: [
        MatCardModule,
        MatButtonModule,
        RouterModule,
        HttpClientModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatProgressSpinnerModule,
        RouterModule.forRoot([])
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
