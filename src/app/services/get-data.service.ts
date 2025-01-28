import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  httpClient = inject(HttpClient)
  #urlTemplate = 'https://jsonplaceholder.typicode.com/'

  getData<T>(type: 'posts' | 'users' = 'users'): Observable<T> {
    return this.httpClient.get<T>(`${this.#urlTemplate}/${type}`);
  }
}
