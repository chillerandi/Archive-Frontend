import { DataTableComponent } from './../data-table/data-table.component';
import { Document } from './document';
import { Injectable } from '@angular/core';
import 'rxjs';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';



@Injectable()
export class DocumentService {

  private headers: Headers = new Headers();

  myObject: Document[];

  constructor(private _http: Http) {
    this.myObject = [
      new Document(
        1,
        'TestTitle0001',
        'TestDescription0001',
        'TestDirectory0001',
        ['TestTag0001', 'TestTag0002'],
        'TestHttpModule'
      )
    ]
  }

  create(document: Document) {
    return this._http.post('/documents', document)
      .map(data => data.json()).toPromise();
  }

  destroy(document: Document) {
    return this._http.delete('/documents/' + document._id)
      .map(data => data.json()).toPromise();
  }

  update(document: Document) {
    return this._http.put('/documents/' + document._id, document)
      .map(data => data.json()).toPromise();
  }

  getDocuments() {
    return this._http.get('/documents/')
      .map(data => data.json()).toPromise();
  }

  public getDocumentsFromNode() {
    return this.myObject;
  }

  getDocument(document: Document) {
    return this._http.get('/documents/' + document._id)
      .map(data => data.json()).toPromise();
  }

}
