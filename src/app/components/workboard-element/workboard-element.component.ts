import { Component, OnInit, Input } from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-workboard-element',
  templateUrl: './workboard-element.component.html',
  styleUrls: ['./workboard-element.component.css']
})
export class WorkboardElementComponent implements OnInit {
  workspace = [];
  activeElement: any = {
    type: '',
    positionX: '',
    positionY: ''
  };
  activeIndex: any;

  @Input() elementPushed: any;

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.workspace = this.storageService.getWorkspace();     // retrieving workspace from localStorage
  }

  drop(ev) {
    ev.preventDefault();
    console.log('event X:', ev.screenX);
    console.log('event Y:', ev.screenY);
    if (ev.screenX > 85 && ev.screenY < 1000) {
      this.elementPushed.positionX = ev.screenX - 168;
      this.elementPushed.positionY = ev.screenY - 120;
      this.workspace.push(this.elementPushed);
      console.log('Workarea:', this.workspace);
    }
    this.checkPosition(this.workspace.length - 1);
  }

  allowDrop(event: any) {
    event.preventDefault();
    // console.log("Dragging event",event)
    return false;
  }

  saveWorkspace() {
    this.storageService.saveWorkspace(this.workspace);
    alert('Workspace stored to local storage');
  }

  resetWorkspace() {
    this.workspace = [];
    this.storageService.clearWorkspace();
  }

  dragEnd(event, index) {
    console.log('Event x:', event.distance.x);
    this.workspace[index].positionX += event.distance.x;
    this.workspace[index].positionY += event.distance.y;
    this.checkPosition(index);
  }

  setActiveElement(item, index) {
    this.activeElement = item;
    this.activeIndex = index;
  }

  preventDrop(event) {
    event.preventDefault();
  }

  deleteElement() {
    this.workspace.splice(this.activeIndex, 1);
    this.activeElement = {};
  }

  checkPosition(index) {
    if (this.workspace[index].positionX < 0) {
      this.workspace[index].positionX = 0;
    }

    if (this.workspace[index].positionY < 0) {
      this.workspace[index].positionY = 0;
    }

    if (this.workspace[index].positionX > 620) {
      this.workspace[index].positionX = 620;
    }

    if (this.workspace[index].positionY > 500) {
      this.workspace[index].positionY = 500;
    }

    console.log('Changed item:', this.workspace[index]);
    this.setActiveElement(this.workspace[index], index);
  }

  // resetActiveElement() {
  //   this.activeElement = {};
  // }
}
