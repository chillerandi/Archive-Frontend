import { DocumentService } from './../shared/document.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})

export class DataTableComponent implements OnInit {
  document: Document;
  documents: Document[];
  ds: DocumentService;
  public myObj =
    [];

  public myObj2 = [{
    '_id': 1,
    'title': 'TestTitle01',
    'description': 'Andi',
    'directory': 'E:Domla2017',
    'tags': ['TestTag01'],
    'file': 'HttpModule01'
  },
  {
    '_id': 2,
    'title': 'TestTitle02',
    'description': 'Uwe',
    'directory': 'D:Domla-Backup',
    'tags': ['TestTag02'],
    'file': 'HttpModule02'
  }];

  constructor() {
   }

  ngOnInit() {
      /* this.ds.getDocumentsFromNode(); */
       $('#datatable').DataTable({
    data: this.myObj2,
    columns: [
        { data: '_id' },
        { data: 'title' },
        { data: 'description' },
        { data: 'directory' },
        { data: 'tags' },
        { data: 'file' }
    ]
});
  }

}
