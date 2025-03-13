import { HttpClient } from '@angular/common/http'
import { inject, Injectable, signal } from '@angular/core'
import { firstValueFrom } from 'rxjs'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class LanguagesService {
  private apiUrl = `${environment.apiUrl}/languages`
  private readonly http: HttpClient = inject(HttpClient)

  public languages = signal<string[]>([])

  constructor() {
    this.getLanguages()
  }

  private getLanguages = async () => {
    this.languages.set(
      await firstValueFrom(this.http.get<string[]>(this.apiUrl)) as string[]
    )
  }
}
