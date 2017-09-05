import { Component, OnInit } from '@angular/core';
import { WebSocketService } from "../scene/serices/web-socket.service";
import { logFactory } from "../log-config";
import * as common from 'akibot-common/dist';

export interface ISideNavItem {
    value: string;
    icon: string;
}
@Component({
    selector: 'menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.component.scss']
})
export class MenuComponent implements OnInit {

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

    constructor(public webSocketService: WebSocketService) {
        this.logger.debug("constructor");
    }

    public ngOnInit() { }

    public onSideNavToggle() {
        this.sideNavOpened = !this.sideNavOpened;
    }

    public onCloseSideNav() {
        this.sideNavOpened = false;
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

    public onGyroscopeCalibrationRequest() {
        this.logger.debug("onGyroscopeCalibrationRequest");
        var gyroscopeCalibrationRequest = new common.GyroscopeCalibrationRequest(60000, 100);
        this.webSocketService.send(gyroscopeCalibrationRequest);
    }

}