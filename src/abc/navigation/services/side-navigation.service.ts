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
  public chosenToggleCommand: string = "orientation";

  public toggleCommandList: ISideNavItem[] = [
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

  public getChosenToggleCommand(): string {
    var res: string;
    this.toggleCommandList.forEach(element => {
      if (element.value == this.chosenToggleCommand) {
        res = element.icon;
      }
    });
    return res;
  }

}
