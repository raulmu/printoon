import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  URL =
    'https://raw.githubusercontent.com/raulmu/assets/main/printool/categories.json';
  constructor(private http: HttpClient) {}

  getAll(): Observable<[]> {
    return this.http.get<[]>(this.URL)
  }
}
