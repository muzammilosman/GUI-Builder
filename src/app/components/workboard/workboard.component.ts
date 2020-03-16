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
      positionY: 0,
      width: '150px',
      height: '50px',
      value: '',
      placeholder: 'New Input',
      position: 'absolute'
    },
    { type: 'Button',
      positionX: 0,
      positionY: 0,
      width: '120px',
      height: '40px',
      value: 'New Button',
      position: 'absolute'
    },
    { type: 'Heading',
      positionX: 0,
      positionY: 0,
      width: '200px',
      height: 'auto',
      value: 'New Heading',
      position: 'relative'
    },
    { type: 'Paragraph',
      positionX: 0,
      positionY: 0,
      width: '200px',
      height: 'auto',
      value: 'New Paragraph',
      position: 'relative'
    }
  ];
  finalElement: any;

  constructor(private storageService: StorageService) { }

  ngOnInit() {
  }

  assignSelect(item) {
    item = JSON.stringify(item);
    this.finalElement = JSON.parse(item);
  }

}
