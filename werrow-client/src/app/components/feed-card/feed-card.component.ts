import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BorrowRequest } from '../../models/borrow-request';
import timeago from 'timeago.js';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.css']
})
export class FeedCardComponent implements OnInit {

  @Input() feedCard: BorrowRequest;
  @Output() showCommentsEvent = new EventEmitter();

  timeInstance = timeago();
  private static idToShowMapOf: string;

  constructor() { }

  ngOnInit() {
  }

  showComments() {
    this.showCommentsEvent.emit(this.feedCard);
  }

  setIdToShowMapOf(postId: string) {
    FeedCardComponent.idToShowMapOf = postId;
  }

  getIdToShowMapOf() {
    return FeedCardComponent.idToShowMapOf;
  }


}
