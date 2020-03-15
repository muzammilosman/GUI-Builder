import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  private activeElementSubject = new Subject<any>();
  activeElementObservable = this.activeElementSubject.asObservable();

  saveWorkspace(workspace) {
    localStorage.setItem('workspace', JSON.stringify(workspace));
    console.log('Workspace saved');
  }

  getWorkspace() {
    if (localStorage.getItem('workspace')) {
      const workspace = JSON.parse(localStorage.getItem('workspace'));
      return workspace;
    }
    return [];    // return empty workspace
  }

  clearWorkspace() {
    localStorage.clear();
  }

  updateActiveElement(item) {
    this.activeElementSubject.next(item);
  }
}
