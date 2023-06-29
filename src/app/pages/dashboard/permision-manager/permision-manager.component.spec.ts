import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermisionManagerComponent } from './permision-manager.component';

describe('PermisionManagerComponent', () => {
  let component: PermisionManagerComponent;
  let fixture: ComponentFixture<PermisionManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PermisionManagerComponent]
    });
    fixture = TestBed.createComponent(PermisionManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
