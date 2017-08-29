import { Document } from './document';
import { Http } from '@angular/http';
import { Injectable, Inject } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TreeService {

  private headers: Headers = new Headers();
  files: File[];

  apiUrl(): string {
    if (this.api.slice(-1) === '/') { return this.api; }
    return this.api + '/';
  }

  constructor( @Inject('API_URL') private api: string, private http: Http) {
    this.headers.append('Content-Type', 'application/json');
  }

  getAll() {
    return this.http.get(this.apiUrl() + 'tree/')
      .retry(3)
      .map(
      res => res.json()
      );
  }
}
