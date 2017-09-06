import { Injectable } from '@angular/core';
import { logFactory } from "../../log-config";

export interface ISideNavItem {
  value: string;
  icon: string;
}

@Injectable()
export class SideNavigationService {

  private logger = logFactory.getLogger(this.constructor.name);

  public sideNavOpened: boolean = false;
  public chosenSideNav: string = "orientation";

  public sideNavItems: ISideNavItem[] = [
    {
      value: "orientation",
      icon: "fa fa-eye"
    },
    {
      value: "move",
      icon: "fa fa-arrows"
    }
  ];

  constructor() {
    this.logger.debug("constructor");
  }

  public getChosenSideNavIcon(): string {
    var res: string;
    this.sideNavItems.forEach(element => {
      if (element.value == this.chosenSideNav) {
        res = element.icon;
      }
    });
    return res;
  }

}
