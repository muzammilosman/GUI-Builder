import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

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

}
