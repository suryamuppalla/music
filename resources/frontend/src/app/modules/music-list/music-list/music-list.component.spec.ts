import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MusicListComponent} from './music-list.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
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

  it('should have title Music list', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#music').textContent).toContain('My Music List');
  });
  it('should have Search Input', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const p = bannerElement.querySelector('#search-input');
    expect(p).toBeDefined();
  });
  it('should have Search Input', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    // tslint:disable-next-line:no-non-null-assertion
    const p = bannerElement.querySelector('#search-input')!;
    expect(p.textContent).toBe('');
  });
  it('Loading is turned off default', () => {
    expect(component.isLoading).toBeDefined();
  });
  it('Books list should be empty default', () => {
    expect(component.musics).toEqual([]);
  });
  it('Search control should be an instance of FormControl', () => {
    expect(component.search).toBeInstanceOf(FormControl);
  });
});
