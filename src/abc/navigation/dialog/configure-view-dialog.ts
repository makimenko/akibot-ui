import { Component, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { SceneConfigurationService } from "../../scene/services/scene-configuration.service";


export interface IDialogConfigureView {
  gridHelperVisible: boolean,
  axisHelperVisible: boolean
}
@Component({
  selector: 'configure-view-dialog',
  template: `
    <h1 md-dialog-title>Configure View</h1>
    <div md-dialog-content>
      <md-slide-toggle tabindex="1" [(ngModel)]="sceneConfigurationService.gridHelperVisible">Show Grid Helper</md-slide-toggle>
      <md-slide-toggle tabindex="2" [(ngModel)]="sceneConfigurationService.axisHelperVisible">Show Axis Helper</md-slide-toggle>
    </div>
    <div md-dialog-actions>
      <button md-button (click)="this.dialogRef.close()">Close</button>
    </div>
  `
})
export class ConfigureViewDialog {

  constructor(
    public dialogRef: MdDialogRef<ConfigureViewDialog>,
    public sceneConfigurationService: SceneConfigurationService) { }


}
