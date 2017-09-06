import { Component, OnInit } from '@angular/core';
import { MenuActionsService } from "../services/menu-actions.service";
import { SideNavigationService } from "../services/side-navigation.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(public menuActionsService: MenuActionsService, public sideNavigationService: SideNavigationService) {

  }

  public onSideNavToggle() {
    this.sideNavigationService.sideNavOpened = !this.sideNavigationService.sideNavOpened;
  }


  ngOnInit() {
  }

}
