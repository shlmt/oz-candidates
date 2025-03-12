import { Component, EventEmitter, Output } from '@angular/core'
import { LanguagesService } from '../../services/languages.service'

@Component({
  selector: 'app-filters',
  imports: [],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css',
})
export class FiltersComponent {
  @Output() onSelectLanguage: EventEmitter<string> = new EventEmitter()
  @Output() onSelectExperience: EventEmitter<'junior' | 'senior' | null> = new EventEmitter()

  selectedValue:'senior'|'junior'|null = null

  constructor(public languagesService: LanguagesService) {}

  handleLanguageSelected = (event: Event) => {
    this.onSelectLanguage.emit((event.target as HTMLSelectElement).value)
  }
  handleExperienceSelected = (value:'senior'|'junior'|null) => {
    this.selectedValue = value
    this.onSelectExperience.emit(value)
  }

}
