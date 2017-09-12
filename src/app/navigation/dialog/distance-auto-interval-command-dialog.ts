import { Component, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

export interface IDialogDistanceAutoIntervalCommand {
  intervalMs: number
}
@Component({
  selector: 'distance-auto-interval-command-dialog',
  templateUrl: 'distance-auto-interval-command-dialog.html'
})
export class DistanceAutoIntervalCommandDialog {

  constructor(
    public dialogRef: MdDialogRef<DistanceAutoIntervalCommandDialog>,
    @Inject(MD_DIALOG_DATA) public data: IDialogDistanceAutoIntervalCommand) { }


}
