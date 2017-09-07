import { Component, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { SceneConfigurationService } from "../../scene/services/scene-configuration.service";


export interface IDialogConfigureView {
  gridHelperVisible: boolean,
  axisHelperVisible: boolean
}
@Component({
  selector: 'configure-view-dialog',
  templateUrl: 'configure-view-dialog.html'
})
export class ConfigureViewDialog {

  constructor(
    public dialogRef: MdDialogRef<ConfigureViewDialog>,
    public sceneConfigurationService: SceneConfigurationService
  ) { }

}
