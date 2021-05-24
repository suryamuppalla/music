import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicDetailsComponent } from './music-details.component';

describe('BookDetailsComponent', () => {
  let component: MusicDetailsComponent;
  let fixture: ComponentFixture<MusicDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicDetailsComponent ]
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
