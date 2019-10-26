import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodesdetailsComponent } from './episodesdetails.component';

describe('EpisodesdetailsComponent', () => {
  let component: EpisodesdetailsComponent;
  let fixture: ComponentFixture<EpisodesdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpisodesdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodesdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
