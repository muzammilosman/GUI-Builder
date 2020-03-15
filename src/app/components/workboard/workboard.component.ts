import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-workboard',
  templateUrl: './workboard.component.html',
  styleUrls: ['./workboard.component.css']
})
export class WorkboardComponent implements OnInit {
  elements = [
    { type: 'Input',
      positionX: 0,
      positionY: 0
    },
    { type: 'Button',
      positionX: 0,
      positionY: 0
    },
    { type: 'Table',
      positionX: 0,
      positionY: 0
    },
  ];
  // tslint:disable-next-line:ban-types
  activeElement: any;
  blockElement = {
    type: String,
    positionX: Number,
    positionY: Number
  };
  finalElement: any;

  workarea = [];
  count = 0;

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    
  }

  drop(ev) {
    ev.preventDefault();
    console.log('event X:', ev.screenX);
    console.log('event Y:', ev.screenY);
    if (ev.screenY > 85) {
      this.activeElement.positionX = ev.screenX - 30;
      this.activeElement.positionY = ev.screenY - 200;
      // this.workarea.push(this.activeElement);
      this.finalElement = this.activeElement;
      console.log('Workarea:', this.workarea);
    }
  }

  // tslint:disable-next-line:align
  allowDrop(event: any) {
    event.preventDefault();
    // console.log("Dragging event",event)
    return false;
  }

  assignSelect(item) {
    item = JSON.stringify(item);
    this.activeElement = JSON.parse(item);
    console.log('Active element:', this.activeElement);
  }

  dragEl(event, el) {
    // event.preventDefault();
    this.activeElement = el;
    console.log('Active el:', this.activeElement);
    return false;
  }

}
