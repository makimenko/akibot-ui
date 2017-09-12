import { Component, OnInit } from '@angular/core';
import { SideNavigationService } from "../services/side-navigation.service";
import { SceneService } from '../../scene/services/scene.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor(
    public sideNavigationService: SideNavigationService,
    public sceneService: SceneService
  ) {
  }

  ngOnInit() {
  }

  public onCloseSideNav() {
    this.sideNavigationService.sideNavOpened = false;
    this.sceneService.onResize();
  }

  public onOpenSideNav() {
    console.log("onOpenSideNav");
    this.sceneService.onResize();
  }
  

}
