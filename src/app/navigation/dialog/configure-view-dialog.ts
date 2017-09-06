import { Component, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';


export interface IDialogConfigureView {
  gridHelperVisible: boolean,
  axisHelperVisible: boolean
}
@Component({
  selector: 'configure-view-dialog',
  template: `
    <h1 md-dialog-title>Configure View</h1>
    <div md-dialog-content>
      <p>Please choose parameters of scene</p>
      <md-slide-toggle tabindex="1" [(ngModel)]="data.gridHelperVisible">Show Grid Helper</md-slide-toggle>
      <md-slide-toggle tabindex="2" [(ngModel)]="data.axisHelperVisible">Show Axis Helper</md-slide-toggle>
    </div>
    <div md-dialog-actions>
      <button md-button [md-dialog-close]="data" tabindex="3">Send</button>
      <button md-button (click)="this.dialogRef.close()" tabindex="-1">Cancel</button>
    </div>
  `
})
export class ConfigureViewDialog {

  constructor(
    public dialogRef: MdDialogRef<ConfigureViewDialog>,
    @Inject(MD_DIALOG_DATA) public data: IDialogConfigureView) { }


}
