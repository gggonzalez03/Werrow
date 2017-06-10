import { Component, OnInit, Input } from '@angular/core';
import { BorrowRequest } from '../borrow-request/borrow-request';
import timeago from 'timeago.js';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.css']
})
export class FeedCardComponent implements OnInit {

  @Input() feedCard: BorrowRequest;

  timeInstance = timeago();
  private static idToShowMapOf: string;

  constructor() { }

  ngOnInit() {
  }

  setIdToShowMapOf(postId: string) {
    FeedCardComponent.idToShowMapOf = postId;
  }

  getIdToShowMapOf() {
    return FeedCardComponent.idToShowMapOf;
  }


}
