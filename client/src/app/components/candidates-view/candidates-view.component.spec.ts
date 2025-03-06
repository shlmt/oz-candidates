import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatesViewComponent } from './candidates-view.component';

describe('CandidatesViewComponent', () => {
  let component: CandidatesViewComponent;
  let fixture: ComponentFixture<CandidatesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidatesViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
