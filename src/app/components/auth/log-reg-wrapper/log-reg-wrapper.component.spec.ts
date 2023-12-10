import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogRegWrapperComponent } from './log-reg-wrapper.component';

describe('LogRegWrapperComponent', () => {
  let component: LogRegWrapperComponent;
  let fixture: ComponentFixture<LogRegWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogRegWrapperComponent]
    });
    fixture = TestBed.createComponent(LogRegWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
