import { DocumentService } from './../shared/document.service';
import { Document } from './../shared/document';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {


  documents: Document[];

  showDetails(document: Document) {
    this.router.navigate(['/documents/' + document.title.toString()]);
  }

  constructor(private ds: DocumentService, private router: Router) { }

  ngOnInit() {
    this.ds.getDocuments().then(res => {
      this.documents = res;
    });
  }

}
