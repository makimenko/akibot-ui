import { Injectable } from '@angular/core';
import * as common from 'akibot-common/dist';
import { EventEmitter } from "events";
import { logFactory } from "../../log-config";
import { ConnectionStatusService } from "./connection-status.service";

@Injectable()
export class WebSocketService {

    private logger = logFactory.getLogger(this.constructor.name);

    private ws: WebSocket;
    public events: EventEmitter;

    // TODO: Mage connectionString configurable: raspberrypi/localhost
    private connectionList: string[] = [
        "ws://localhost:3000",
        "ws://raspberrypi:3000"
    ];
    private connectIndex: number;

    constructor(private connectionStatusService: ConnectionStatusService) {
        this.logger.info("constructor");

        this.events = new EventEmitter();

        this.onOpen = this.onOpen.bind(this);
        this.onMessage = this.onMessage.bind(this);
        this.onError = this.onError.bind(this);
        this.onClose = this.onClose.bind(this);

        this.connect();
    }

    private connectNext() {
        this.connectIndex++;
        if (this.connectionList.length > this.connectIndex) {
            var conn: string = this.connectionList[this.connectIndex];
            this.logger.debug("Connecting to: " + conn);
            this.ws = new WebSocket(conn);

            this.ws.onopen = this.onOpen;
            this.ws.onmessage = this.onMessage;
            this.ws.onerror = this.onError;
            this.ws.onclose = this.onClose;
        } else {
            throw new Error("Failed to connect");
        }
    }

    public connect() {
        this.connectIndex = -1;
        this.connectNext();
    }

    public disconnect() {
        this.ws.close();
    }

    public onOpen(event: Event): any {
        this.logger.debug("onOpen");
        this.events.emit("onopen", event);
        this.connectionStatusService.connected = true;
    }

    public onClose(event: CloseEvent): any {
        this.logger.warn("WebSocket closed");
        this.connectionStatusService.connected = false;
    }

    public onError(event: Event): any {
        if (this.ws.readyState != this.ws.OPEN) {
            this.logger.warn("Trying to reconnect to alternative server");
            this.connectNext();
        } else {
            this.logger.error("onError: " + JSON.stringify(event));
            this.events.emit("onerror", event);
            this.connectionStatusService.connected = false;
        }
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