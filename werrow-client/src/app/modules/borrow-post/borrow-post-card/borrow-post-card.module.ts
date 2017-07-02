import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorrowPostMapModule } from '../borrow-post-map/borrow-post-map.module';
import { FeedCardComponent } from '../../../components/feed-card/feed-card.component';

@NgModule({
    imports: [
        CommonModule,
        BorrowPostMapModule
    ],
    exports: [
        FeedCardComponent
    ],
    declarations: [
        FeedCardComponent
    ],
    providers: [],
})
export class BorrowPostCardModule { }
