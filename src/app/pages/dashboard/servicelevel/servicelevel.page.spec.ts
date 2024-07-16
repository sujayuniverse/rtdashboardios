import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicelevelPage } from './servicelevel.page';

describe('ServicelevelPage', () => {
  let component: ServicelevelPage;
  let fixture: ComponentFixture<ServicelevelPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicelevelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
