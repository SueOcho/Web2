import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiComponent } from './servi.component';

describe('ServiComponent', () => {
  let component: ServiComponent;
  let fixture: ComponentFixture<ServiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
