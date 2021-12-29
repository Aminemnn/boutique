import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulegestprodComponent } from './modulegestprod.component';

describe('ModulegestprodComponent', () => {
  let component: ModulegestprodComponent;
  let fixture: ComponentFixture<ModulegestprodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModulegestprodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulegestprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
