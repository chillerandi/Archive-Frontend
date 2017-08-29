import { DocumentService } from './shared/document.service';
import { TreeService } from './shared/tree.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DocumentTreeComponent } from './document-tree/document-tree.component';
import { AppComponent } from './app.component';
import { DocumentListComponent } from './document-list/document-list.component';
import { DataTableComponent } from './data-table/data-table.component';
import { DocumentListItemComponent } from './document-list-item/document-list-item.component';



@NgModule({
  declarations: [
    AppComponent,
    DocumentTreeComponent,
    DocumentListComponent,
    DataTableComponent,
    DocumentListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    TreeService,
    DocumentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
