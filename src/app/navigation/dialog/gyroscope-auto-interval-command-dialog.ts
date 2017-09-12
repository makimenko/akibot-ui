import { Component, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

export interface IDialogGyroscopeAutoIntervalCommand {
  intervalMs: number
}
@Component({
  selector: 'gyroscope-auto-interval-command-dialog',
  templateUrl: 'gyroscope-auto-interval-command-dialog.html'
})
export class GyroscopeAutoIntervalCommandDialog {

  constructor(
    public dialogRef: MdDialogRef<GyroscopeAutoIntervalCommandDialog>,
    @Inject(MD_DIALOG_DATA) public data: IDialogGyroscopeAutoIntervalCommand) { }


}
