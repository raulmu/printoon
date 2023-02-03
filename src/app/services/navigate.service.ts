import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigateService {
  data = new BehaviorSubject<any>(null);

  constructor(private router: Router) {}

  navigateTo(url: string, data = null) {
    this.data.next(data);
    this.router.navigateByUrl(url);
  }

  openNew(url: string) {
    window.open(url, '_blank');
  }
}
