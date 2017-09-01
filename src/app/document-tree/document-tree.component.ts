import { element } from 'protractor';
import { DocumentService } from './../shared/document.service';
import { Document } from './../shared/document';
import { DataTableComponent } from './../data-table/data-table.component';
import { Http } from '@angular/http';
import { TreeService } from './../shared/tree.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-document-tree',
  templateUrl: './document-tree.component.html',
  styleUrls: ['./document-tree.component.css'],
  providers: [
    TreeService,
    DocumentService,
    DataTableComponent
  ]
})

export class DocumentTreeComponent implements OnInit {

  _documents: Document[];
  _directory: any;

  constructor(private _ts: TreeService, private _ds: DocumentService, private _tableDocTable: DataTableComponent) { }

  ngOnInit() {
    const myTree = this._ts.getAll().subscribe(res => {
      this._documents = res;

      const self = this;
      $('#tree').treeview({ data: this._documents })
        .on('nodeSelected', function (event, data) {
          console.log(data.text);
          let _directory = data.text;
          let _parent = $('#tree').treeview('getParent', data);

          while(typeof _parent.text === 'string' ){
            _directory =  /* '/' + */  _parent.text + '/' + _directory;
            _parent = $('#tree').treeview('getParent', _parent);
          }
          console.log(_directory);
          self._ts.setDirectory(_directory);
          self._ds.getDocuments();
         /* self._ds.getDocuments(); */
        });
    });
    console.log('Running in debug');
  }

  public getDocumentsFromNode() {
    return this._ds.getDocuments();
  }

}
