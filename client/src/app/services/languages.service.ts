import { HttpClient } from '@angular/common/http'
import { inject, Injectable, signal } from '@angular/core'
import { firstValueFrom } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class LanguagesService {
  private apiUrl = 'http://localhost:1234/api/languages'
  private readonly http: HttpClient = inject(HttpClient)

  public languages = signal<string[]>([])

  constructor() {
    this.getLanguages()
  }

  private getLanguages = async () => {
    this.languages.set(
      await firstValueFrom(this.http.get<any[]>(this.apiUrl)) as string[]
    )
  }
}
