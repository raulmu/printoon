import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class AppUpdateService {

  constructor(private readonly updates: SwUpdate) { 
    this.updates.versionUpdates.subscribe(event => {
      this.showAppUpdateAlert();
    });
  }

  showAppUpdateAlert() {
    const header = 'App Update available';
    const message = 'Choose Ok to update';
    const action = this.doAppUpdate;
    const caller = this;
    let result = confirm(`${header}: ${message}`);
    if(result) {
      action();
    };
    // Use MatDialog or ionicframework's AlertController or similar
    // presentAlert(header, message, action, caller);
  }

  doAppUpdate() {
    this.updates.activateUpdate().then(() => document.location.reload());
  }
  
}
