import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './pages/home/home.component';
import { PersonComponent } from './cmps/person/person.component';
import { PersonPreviewComponent } from './cmps/person-preview/person-preview.component';
import { PersonChildsComponent } from './cmps/person-childs/person-childs.component';
import { TreesListComponent } from './cmps/trees-list/trees-list.component';
import { TreePreviewComponent } from './cmps/tree-preview/tree-preview.component';
import { TreeComponent } from './pages/tree/tree.component';
import { DragScrollModule } from 'ngx-drag-scroll';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonComponent,
    PersonPreviewComponent,
    PersonChildsComponent,
    TreesListComponent,
    TreePreviewComponent,
    TreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    DragScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
