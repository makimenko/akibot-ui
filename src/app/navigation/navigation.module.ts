import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebSocketService } from "../scene/services/web-socket.service";
import { MenuComponent } from "./menu/menu.component";
import { PageComponent } from "./page/page.component";
import { SideNavComponent } from "./sidenav/sidenav.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { MenuActionsService } from './services/menu-actions.service';
import { SideNavigationService } from './services/side-navigation.service';
import { Material2Module } from "../design/material2.module";
import { SceneModule } from "../scene/scene.module";
import { SceneComponent } from "../scene/scene.component";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { GyroscopeCalibrationRequestDialog } from "./dialog/gyroscope-calibration-request-dialog";
import { ConfigureViewDialog } from "./dialog/configure-view-dialog";
import { SceneConfigurationService } from "../scene/services/scene-configuration.service";
import { NavigationDialogModule } from './dialog/navigation-dialog.module';
import { KeyboardService } from './services/keyboard.service';

@NgModule({
  imports: [
    CommonModule,
    Material2Module,
    SceneModule,
    FormsModule,
    NavigationDialogModule
  ],
  declarations: [
    MenuComponent,
    PageComponent,
    SideNavComponent,
    ToolbarComponent
  ],
  providers: [
    WebSocketService,
    MenuActionsService,
    SideNavigationService,
    SceneConfigurationService,
    KeyboardService
  ],
  exports: [
    PageComponent
  ]
})
export class NavigationModule { }
