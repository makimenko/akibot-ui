import { Component, OnInit } from '@angular/core';
import { MenuActionsService } from "../services/menu-actions.service";
import { SideNavigationService } from "../services/side-navigation.service";
import { MdDialog } from "@angular/material";
import { GyroscopeCalibrationRequestDialog, IDialogGyroscopeCalibrationRequest } from "../dialog/gyroscope-calibration-request-dialog";
import { WebSocketService } from "../../scene/services/web-socket.service";
import * as common from 'akibot-common/dist';
import { IDialogConfigureView, ConfigureViewDialog } from "../dialog/configure-view-dialog";
import { CameraService } from "../../scene/services/camera.service";
import { GyroscopeAutoIntervalCommandDialog, IDialogGyroscopeAutoIntervalCommand } from '../dialog/gyroscope-auto-interval-command-dialog';
import { IDialogDistanceAutoIntervalCommand, DistanceAutoIntervalCommandDialog } from '../dialog/distance-auto-interval-command-dialog';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    public dialog: MdDialog,
    public menuActionsService: MenuActionsService,
    public sideNavigationService: SideNavigationService,
    public webSocketService: WebSocketService,
    public cameraService : CameraService
  ) {  }

  public onSideNavToggle() {
    this.sideNavigationService.sideNavOpened = !this.sideNavigationService.sideNavOpened;
  }


  ngOnInit() {
  }

  public menuWorldContentRequest() {
    var worldContentRequest = new common.WorldContentRequest();
    this.webSocketService.send(worldContentRequest);
  }


  public menuGyroscopeCalibrationRequest() {
    var input: IDialogGyroscopeCalibrationRequest = {
      maxTimeMs: 10000, intervalMs: 100
    }
    let dialogRef = this.dialog.open(GyroscopeCalibrationRequestDialog, {
      data: input
    });
    dialogRef.afterClosed().subscribe((result: IDialogGyroscopeCalibrationRequest) => {
      if (result != undefined) {
        var gyroscopeCalibrationRequest = new common.GyroscopeCalibrationRequest(result.maxTimeMs, result.intervalMs);
        this.webSocketService.send(gyroscopeCalibrationRequest);
      }
    });
  }


  public menuConfigureView() {
    let dialogRef = this.dialog.open(ConfigureViewDialog);
    dialogRef.afterClosed().subscribe(() => {
    });
  }

  
  public menuGyroscopeAutoIntervalCommand() {
    var input: IDialogGyroscopeAutoIntervalCommand = {
       intervalMs: 1000
    }
    let dialogRef = this.dialog.open(GyroscopeAutoIntervalCommandDialog, {
      data: input
    });
    dialogRef.afterClosed().subscribe((result: IDialogGyroscopeAutoIntervalCommand) => {
      if (result != undefined) {
        var gyroscopeAutoIntervalCommand = new common.GyroscopeAutoIntervalCommand(result.intervalMs);
        this.webSocketService.send(gyroscopeAutoIntervalCommand);
      }
    });
  }

  public menuDistanceAutoIntervalCommand() {
    var input: IDialogDistanceAutoIntervalCommand = {
       intervalMs: 1000
    }
    let dialogRef = this.dialog.open(DistanceAutoIntervalCommandDialog, {
      data: input
    });
    dialogRef.afterClosed().subscribe((result: IDialogDistanceAutoIntervalCommand) => {
      if (result != undefined) {
        var gyroscopeAutoIntervalCommand = new common.DistanceAutoIntervalCommand(result.intervalMs);
        this.webSocketService.send(gyroscopeAutoIntervalCommand);
      }
    });
  }



}
