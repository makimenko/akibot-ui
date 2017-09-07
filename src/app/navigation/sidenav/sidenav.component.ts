import { Component, OnInit } from '@angular/core';
import { SideNavigationService } from "../services/side-navigation.service";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor(public sideNavigationService: SideNavigationService) {
  }

  ngOnInit() {
  }

  public onCloseSideNav() {
    this.sideNavigationService.sideNavOpened = false;
  }

}
