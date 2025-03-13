import { inject, Injectable, signal } from '@angular/core';
import { candidate } from '../../models/candidate.interface';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CandidatesService {
  private apiUrl = `${environment.apiUrl}/candidates`
  private readonly http: HttpClient = inject(HttpClient)

  public candidates = signal<candidate[]>([])

  constructor() {
    this.getCandidates()
  }

  public getCandidates = async () => {
    this.candidates.set(
      await firstValueFrom(this.http.get<candidate[]>(this.apiUrl)) as candidate[]
    )
  }
}
