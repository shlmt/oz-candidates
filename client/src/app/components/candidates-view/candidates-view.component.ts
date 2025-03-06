import { Component, computed, OnInit } from '@angular/core';
import { CandidatesService } from '../../services/candidates.service';

@Component({
  selector: 'app-candidates-view',
  imports: [],
  templateUrl: './candidates-view.component.html',
  styleUrl: './candidates-view.component.scss',
})
export class CandidatesViewComponent {
  public filteredCandidates = computed(() => {
    return this.candidatesService.candidates()
  })

  constructor(private candidatesService: CandidatesService) {}
}
