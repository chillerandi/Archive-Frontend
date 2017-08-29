import { HttpModule } from '@angular/http';

export class Document {
  constructor(
    public _id: number,
    public title: string,
    public description: string,
    public directory: string,
    public tags: Array<string>,
    public file: HttpModule
  ) {}
}
