import { Component, OnInit, Input} from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-element-detail',
  templateUrl: './element-detail.component.html',
  styleUrls: ['./element-detail.component.css']
})
export class ElementDetailComponent implements OnInit {
  @Input() currentElement: any;

  constructor(private storageService: StorageService) { }

  ngOnInit() {
  }


}
