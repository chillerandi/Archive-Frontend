import { TreeService } from './tree.service';
import { DocumentTreeComponent } from './../document-tree/document-tree.component';
import { DataTableComponent } from './../data-table/data-table.component';
import { Document } from './document';
import { Injectable, Inject } from '@angular/core';
import 'rxjs';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';


@Injectable()
export class DocumentService {

  http: any;
  myObject: Document[];
  directory: any;
  documentTree: DocumentTreeComponent;
  private headers: Headers = new Headers();

  /* apiUrl(): string {
    if (this.api.slice(-1) === '/') { return this.api; }
    return this.api + '/';
  } */

  constructor(/* @Inject('API_URL') private api: string, */ private _http: Http, private _ts: TreeService) {
    this.headers.append('Content-Type', 'application/json');
   }

  getDocuments() {
    /* return this._http.get(this.apiUrl() + this.directory)
      .retry(3)
      .map(res => res.json()).toPromise(); */
      this.directory = this._ts._directory;
     return this._http.get('/documents/'  + this.directory )
      .map(data => data.json()).toPromise();
  }
}
