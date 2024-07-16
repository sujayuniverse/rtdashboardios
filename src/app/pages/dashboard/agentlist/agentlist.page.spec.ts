import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgentlistPage } from './agentlist.page';

describe('AgentlistPage', () => {
  let component: AgentlistPage;
  let fixture: ComponentFixture<AgentlistPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
