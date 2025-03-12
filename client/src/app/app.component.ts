import { Component } from '@angular/core';
import { CandidatesViewComponent } from './components/candidates-view/candidates-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CandidatesViewComponent]
})
export class AppComponent {
}
