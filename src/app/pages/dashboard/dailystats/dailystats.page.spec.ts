import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DailystatsPage } from './dailystats.page';

describe('DailystatsPage', () => {
  let component: DailystatsPage;
  let fixture: ComponentFixture<DailystatsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DailystatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
