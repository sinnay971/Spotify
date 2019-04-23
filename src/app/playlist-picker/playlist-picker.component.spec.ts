import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistPickerComponent } from './playlist-picker.component';

describe('PlaylistPickerComponent', () => {
  let component: PlaylistPickerComponent;
  let fixture: ComponentFixture<PlaylistPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
