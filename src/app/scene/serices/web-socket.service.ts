import { Injectable } from '@angular/core';
import * as common from 'akibot-common/dist';

@Injectable()
export class WebSocketService {
    private ws: WebSocket;

    constructor() {
        console.log("WebSocketService.constructor");
        this.onOpen.bind(this);
        this.onMessage.bind(this);

        //TODO: Configure URL
        this.ws = new WebSocket("ws://localhost:3000");

        this.onMessage = this.onMessage.bind(this);
        this.onOpen = this.onOpen.bind(this);

        this.ws.onopen = this.onOpen;
        this.ws.onmessage = this.onMessage;
    }

    public onOpen(event: Event): any {
        console.log("onopen");
        let orientationRequest = new common.OrientationRequest(common.AngleUtils.createAngleFromDegrees(100), common.AngleUtils.createAngleFromDegrees(10), 5000);
        let msg: string = common.SerializationUtils.jsonStringify(orientationRequest);
        this.ws.send(msg);
    }

    public onMessage(msg: MessageEvent) {
        console.log("WebSocketService.onMessage: " + msg.data);
        
        let orientationResponse: common.OrientationResponse = common.SerializationUtils.deserialize(common.SerializationUtils.jsonParse(msg.data), common);
        console.log("Deserialized final Angle: " + orientationResponse.finalAngle.getDegrees() + " degrees");

    }


}