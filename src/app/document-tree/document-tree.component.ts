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
    DocumentService
  ]
})

export class DocumentTreeComponent implements OnInit {

  documents: Document[];
  documentsTest: Document[];
  /* ds: DocumentService; */

  constructor(private ts: TreeService, public ds: DocumentService) { }

  ngOnInit() {
    const myTree = this.ts.getAll().subscribe(res => {
      this.documents = res;

      $('#tree').treeview({ data: this.documents })
        .on('nodeSelected', function (event, data) {
          console.log(data.text);

          let directory = data.text;
          let parent = $('#tree').treeview('getParent', data);

          while(typeof parent.text === 'string' ){
            directory = '/' + parent.text + '/' + directory;
            parent = $('#tree').treeview('getParent', parent);
          }

          console.log(directory);
        });
    });
    console.log('Running in debug');
  }

}
