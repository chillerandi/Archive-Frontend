import { DataTableComponent } from './data-table/data-table.component';
import { Component, OnInit } from '@angular/core';
import {DocumentTreeComponent } from './document-tree/document-tree.component' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'Domla-Archive';

  ngOnInit() {

  }
}
