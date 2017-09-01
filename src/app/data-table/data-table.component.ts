import { DocumentListComponent } from './../document-list/document-list.component';
import { TreeService } from './../shared/tree.service';
import { DocumentTreeComponent } from './../document-tree/document-tree.component';
import { DocumentService } from './../shared/document.service';
import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';

declare var jquery: any;
declare var $: any;



@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})

@Injectable()
export class DataTableComponent implements OnInit {
  document: Document;
  public documents: Document[];

  ts: TreeService;


  public myObj3 = [{
    '_id': 1,
    'title': 'TestTitle03',
    'description': 'Dany',
    'directory': 'E:Domla2017/Dany',
    'tags': ['TestTag03'],
    'file': 'HttpModule03'
  },
  {
    '_id': 2,
    'title': 'TestTitle04',
    'description': 'Chris',
    'directory': 'D:Domla-Backup/chris',
    'tags': ['TestTag03'],
    'file': 'HttpModule03'
  }];

  public myObj4 = [{
    '_id': 1,
    'title': 'TestTitle04',
    'description': 'Tati',
    'directory': 'E:Domla2017/tati',
    'tags': ['TestTag04'],
    'file': 'HttpModule04'
  },
  {
    '_id': 2,
    'title': 'TestTitle04',
    'description': 'Mika',
    'directory': 'D:Domla-Backup/mika',
    'tags': ['TestTag04'],
    'file': 'HttpModule04'
  }];

  constructor(private _ds: DocumentService) { }

  private _tableHandle;

  ngOnInit() {
    const self = this;
    this._tableHandle = $('#datatable').DataTable({
      data:  this.myObj3,
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

  public switchData() {
      $('#datatable').dataTable().fnClearTable();
      $('#datatable').dataTable().fnAddData( this.myObj4 /* this.ts._directory */);
    }

  }








