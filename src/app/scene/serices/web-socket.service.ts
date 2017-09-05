import { Injectable } from '@angular/core';
import * as common from 'akibot-common/dist';
import { EventEmitter } from "events";
import { logFactory } from "../../log-config";

@Injectable()
export class WebSocketService {

    private logger = logFactory.getLogger(this.constructor.name);

    private ws: WebSocket;
    public events: EventEmitter;

    // TODO: Mage connectionString configurable: raspberrypi/localhost
    private connectionString: string = "ws://localhost:3000";

    constructor() {
        this.logger.info("constructor");

        this.events = new EventEmitter();

        this.logger.debug("Connecting to: " + this.connectionString);
        this.ws = new WebSocket(this.connectionString);

        this.onOpen = this.onOpen.bind(this);
        this.onMessage = this.onMessage.bind(this);
        this.onError = this.onError.bind(this);

        this.ws.onopen = this.onOpen;
        this.ws.onmessage = this.onMessage;
        this.ws.onerror = this.onError;
    }

    public onError(event: Event): any {
        this.logger.debug("onError");
        this.events.emit("onerror", event);
    }

    public onOpen(event: Event): any {
        this.logger.debug("onOpen");
        this.events.emit("onopen", event);
    }

    public onMessage(msg: MessageEvent) {
        this.logger.trace("onMessage: " + msg.data);
        var message: common.Message = common.SerializationUtils.deserialize(common.SerializationUtils.jsonParse(msg.data), common);
        this.events.emit(message.$name, message);
    }

    public send(message: common.Message) {
        var jsonString = common.SerializationUtils.jsonStringify(message);
        this.logger.trace("send: " + jsonString);
        this.ws.send(jsonString);
    }

}