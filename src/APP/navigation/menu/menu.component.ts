import { Component, OnInit } from '@angular/core';
import { MenuActionsService } from "../services/menu-actions.service";
import { SideNavigationService } from "../services/side-navigation.service";
import { MdDialog } from "@angular/material";
import { GyroscopeCalibrationRequestDialog } from "../dialog/gyroscope-calibration-request-dialog";
import { WebSocketService } from "../../scene/services/web-socket.service";
import * as common from 'akibot-common/dist';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(public menuActionsService: MenuActionsService, public sideNavigationService: SideNavigationService, public dialog: MdDialog, public webSocketService: WebSocketService) {

  }

  public onSideNavToggle() {
    this.sideNavigationService.sideNavOpened = !this.sideNavigationService.sideNavOpened;
  }


  ngOnInit() {
  }

  public menuGyroscopeCalibrationRequest() {
    let dialogRef = this.dialog.open(GyroscopeCalibrationRequestDialog, {
      //width: '450px',
      data: { maxTimeMs: 10000, intervalMs: 100 }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        console.log(result);
        var gyroscopeCalibrationRequest = new common.GyroscopeCalibrationRequest(result.maxTimeMs, result.intervalMs);
        this.webSocketService.send(gyroscopeCalibrationRequest);
      }
    });


  }

}
