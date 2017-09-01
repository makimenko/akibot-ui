import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SceneComponent } from "./scene/scene.component";
import { WebSocketService } from "./scene/serices/web-socket.service";
import { Material2Module } from "./material2.module";



@NgModule({
  declarations: [
    AppComponent,
    SceneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    Material2Module
  ],
  providers: [WebSocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
