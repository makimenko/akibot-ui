import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GyroscopeCalibrationRequestDialog } from './gyroscope-calibration-request-dialog';
import { ConfigureViewDialog } from './configure-view-dialog';
import { GyroscopeAutoIntervalCommandDialog } from './gyroscope-auto-interval-command-dialog';
import { FormsModule } from '@angular/forms';
import { Material2Module } from '../../design/material2.module';
import { DistanceAutoIntervalCommandDialog } from './distance-auto-interval-command-dialog';


@NgModule({
  imports: [
    CommonModule,
    Material2Module,
    FormsModule
  ],
  declarations: [
    GyroscopeCalibrationRequestDialog,
    ConfigureViewDialog,
    GyroscopeAutoIntervalCommandDialog,
    DistanceAutoIntervalCommandDialog
  ],
  entryComponents: [
    GyroscopeCalibrationRequestDialog,
    ConfigureViewDialog,
    GyroscopeAutoIntervalCommandDialog,
    DistanceAutoIntervalCommandDialog
  ],
  exports: [
    GyroscopeCalibrationRequestDialog,
    ConfigureViewDialog,
    GyroscopeAutoIntervalCommandDialog,
    DistanceAutoIntervalCommandDialog
  ]
})
export class NavigationDialogModule { }
