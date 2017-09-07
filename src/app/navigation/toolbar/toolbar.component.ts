import { Component, OnInit } from '@angular/core';
import { ConnectionStatusService } from "../../scene/services/connection-status.service";
import { MdSlideToggleChange } from "@angular/material";
import { WebSocketService } from "../../scene/services/web-socket.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(
    public connectionStatusService: ConnectionStatusService,
    private webSocketService: WebSocketService) { }

  public ngOnInit() {
  }

  public onConnectionChange(event: MdSlideToggleChange) {
    if (event.checked) {
      this.webSocketService.connect();
    } else {
      this.webSocketService.disconnect();
    }
  }

}
