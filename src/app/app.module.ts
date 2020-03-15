import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { WorkboardElementComponent } from './components/workboard-element/workboard-element.component';
import { WorkboardComponent } from './components/workboard/workboard.component';
import { ElementDetailComponent } from './components/element-detail/element-detail.component';

import { StorageService } from './services/storage.service';


@NgModule({
  declarations: [
    AppComponent,
    WorkboardComponent,
    WorkboardElementComponent,
    ElementDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
