import { Component, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

export interface IDialogGyroscopeCalibrationRequest {
  maxTimeMs: 10000,
  intervalMs: 100
}
@Component({
  selector: 'gyroscope-calibration-request-dialog',
  templateUrl : 'gyroscope-calibration-request-dialog.html'
})
export class GyroscopeCalibrationRequestDialog {

  constructor(
    public dialogRef: MdDialogRef<GyroscopeCalibrationRequestDialog>,
    @Inject(MD_DIALOG_DATA) public data: IDialogGyroscopeCalibrationRequest) { }


}
