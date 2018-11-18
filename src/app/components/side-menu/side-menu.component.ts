import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Place, PlaceContent } from '../../shared/models/model';
import { faCoffee, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  faTimes = faTimes;
  @Input() place: Place;
  @Output() closeClick: EventEmitter<boolean> = new EventEmitter();
  @Output() addedContent: EventEmitter<any> = new EventEmitter();
  showNewContentFlag = false;
  message = '';
  content: PlaceContent = {
    name: '',
    description: '',
    files: [],
    pointId: '',
  };
  constructor() { }

  ngOnInit() {
  }

  closeSideMenu() {
    this.closeClick.emit(false);
  }
  upload() {

    const foundName = this.place.content.find(res => {
      return res.name.toLowerCase() === this.content.name.toLowerCase();
    });
    if (foundName) {
      this.message = 'There is a content with this name , please enter another name';
      return;
    }
    this.message = '';
    this.showNewContent(false);
    this.content.pointId = this.place.id;
    this.addedContent.emit(this.content);
    this.content = {
      name: '',
      description: '',
      files: [],
      pointId: '',
    };
  }
  showNewContent(value) {
    this.showNewContentFlag = value;
  }
  onFileChange(event) {
    const files = event.target.files;
    for (const key in files) {
      if (files.hasOwnProperty(key)) {
        const value = files[key];
        this.content.files.push(value.name);
      }
    }
  }
}
