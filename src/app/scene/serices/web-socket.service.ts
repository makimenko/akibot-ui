import { Injectable } from '@angular/core';


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
        this.ws.send('{"$name":"OrientationRequest","targetAngle":{"radians":1.7453292519943295,"$name":"Angle"},"tolerance":{"radians":0.17453292519943295,"$name":"Angle"},"timeout":1000}');
    }

    public onMessage(msg: MessageEvent) {
        console.log("WebSocketService.onMessage: " + msg.data);
    }


}