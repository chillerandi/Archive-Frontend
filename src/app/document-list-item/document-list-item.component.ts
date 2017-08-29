import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-document-list-item',
  templateUrl: './document-list-item.component.html',
  styleUrls: ['./document-list-item.component.css']
})
export class DocumentListItemComponent {

  @Input() document: Document[];
  @Output() showDetailsEvent = new EventEmitter<Document>();
  showDetails(document: Document) {
    this.showDetailsEvent.emit(document);
  }

}
