import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageOptionComponent } from './message-option.component';

describe('MessageOptionComponent', () => {
  let component: MessageOptionComponent;
  let fixture: ComponentFixture<MessageOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
