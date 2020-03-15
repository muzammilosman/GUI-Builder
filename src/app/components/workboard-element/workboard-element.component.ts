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

  @Input() set elementPushed(val) {
    if (val !== undefined) {
    console.log('active element updated:', val);
    this.workspace.push(val);
  }
  }

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.workspace = this.storageService.getWorkspace();

    // this.storageService.activeElementObservable.subscribe(el => {
    //   console.log('Observable working:', el);
    //   this.workspace[this.activeIndex] = el;
    // });
  }

  saveWorkspace() {
    this.storageService.saveWorkspace(this.workspace);
  }

  resetWorkspace() {
    this.workspace = [];
    this.storageService.clearWorkspace();
  }

  dragEnd(event, index) {
    console.log('Event x:', event.distance.x);
    this.workspace[index].positionX += event.distance.x;
    this.workspace[index].positionY += event.distance.y;
    console.log('Changed item:', this.workspace[index]);
    this.setActiveElement(this.workspace[index], index);
  }

  setActiveElement(item, index) {
    this.activeElement = item;
    this.activeIndex = index;
  }

}
