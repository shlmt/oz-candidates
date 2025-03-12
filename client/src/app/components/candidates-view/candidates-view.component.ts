import { Component, computed, signal } from '@angular/core'
import { CandidatesService } from '../../services/candidates.service'
import { FiltersComponent } from '../filters/filters.component'

@Component({
  selector: 'app-candidates-view',
  imports: [FiltersComponent],
  templateUrl: './candidates-view.component.html',
  styleUrl: './candidates-view.component.css',
})
export class CandidatesViewComponent {
  private currentYear = new Date().getFullYear()

  public filteredCandidates = computed(() => {
    return this.candidatesService.candidates().filter((cand) => {
      const languageCheck = this.selectedLanguage() === '' || cand.languages.includes(this.selectedLanguage())
      const experienceCheck =
        (!this.selectedExperience() || 
        (this.selectedExperience() === 'junior' && this.currentYear - (cand.beginYear || this.currentYear) < 3) || 
        (this.selectedExperience() === 'senior' && cand.beginYear && this.currentYear - cand.beginYear >= 3))      
      return languageCheck && experienceCheck
    })
  })

  public selectedLanguage = signal<string>('')
  public selectedExperience = signal<'junior' | 'senior' | null>(null)

  constructor(private candidatesService: CandidatesService) {}

  onSelectLanguage = (lang: string) => {
    this.selectedLanguage.set(lang)
  }

  onSelectExperience = (exp: 'junior' | 'senior' | null) => {
    this.selectedExperience.set(exp)
  }

}
