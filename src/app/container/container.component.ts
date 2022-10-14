import { Component, OnInit } from '@angular/core';
import { CONFIG_SYSTEM } from '../share/model/share.model';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.less']
})

export class ContainerComponent implements OnInit {

  faCoffee = faCoffee;
  activeButton = 1;
  menu = CONFIG_SYSTEM.NAVIGATION;
  constructor() { }

  ngOnInit() {
  }

  addClassActive(action: number) {
    this.activeButton = action;
  }

}
