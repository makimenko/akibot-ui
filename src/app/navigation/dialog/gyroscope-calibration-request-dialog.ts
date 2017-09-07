import { Component, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

export interface IDialogGyroscopeCalibrationRequest {
  maxTimeMs: 10000,
  intervalMs: 100
}
@Component({
  selector: 'gyroscope-calibration-request-dialog',
  template: `
    <h1 md-dialog-title>Gyroscope Calibration</h1>
    <div md-dialog-content>
      <p>Please define request parameters</p>
    <md-form-field>
      <input mdInput tabindex="1" [(ngModel)]="data.maxTimeMs" placeholder="Calibration time (ms)">
    </md-form-field>
    <md-form-field>
      <input mdInput tabindex="2" [(ngModel)]="data.intervalMs" placeholder="Interval (ms)">
    </md-form-field>
    </div>
    <div md-dialog-actions>
      <button md-button [md-dialog-close]="data" tabindex="3">Send</button>
      <button md-button (click)="this.dialogRef.close()" tabindex="-1">Cancel</button>
    </div>
  `
})
export class GyroscopeCalibrationRequestDialog {

  constructor(
    public dialogRef: MdDialogRef<GyroscopeCalibrationRequestDialog>,
    @Inject(MD_DIALOG_DATA) public data: IDialogGyroscopeCalibrationRequest) { }


}
