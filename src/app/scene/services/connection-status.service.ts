import { Injectable } from '@angular/core';

@Injectable()
export class ConnectionStatusService {

  public connected: boolean = false;

  constructor() { }

}
