import { Component, OnInit } from '@angular/core';
import { CONFIG_SYSTEM } from 'src/app/share/model/share.model';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.less']
})
export class MenuListComponent implements OnInit {
  categories = CONFIG_SYSTEM.CATEGORIES;
  isCollapsed = false;
  menuList: {
    title: string,
    price: string,
    img: string
  } []= [];
  constructor() { }

  ngOnInit() {
  }

  showMenu(idCategory: number) {
    const categorySelected = this.categories.find(category => category.id === idCategory);
    console.log("categorySelected", categorySelected);
    
    this.menuList = categorySelected?.menu!;
  }

}
