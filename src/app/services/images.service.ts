import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  URL =
    'https://raw.githubusercontent.com/raulmu/assets/main/printool/images.json';

  constructor(private http: HttpClient) {}

  getImages(slug: string): Observable<[]> {
    return this.http.get<any>(this.URL).pipe(
      map((res) => {
        return res[slug] as [];
      })
    );
  }
}
