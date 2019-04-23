import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialoguePickerComponent } from './dialogue-picker.component';

describe('DialoguePickerComponent', () => {
  let component: DialoguePickerComponent;
  let fixture: ComponentFixture<DialoguePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialoguePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialoguePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
