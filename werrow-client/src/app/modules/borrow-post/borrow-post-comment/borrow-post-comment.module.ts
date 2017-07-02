import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PostCommentCardComponent } from '../../../components/post-comment-card/post-comment-card.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports: [
        PostCommentCardComponent
    ],
    declarations: [
        PostCommentCardComponent
    ],
    providers: [],
})
export class BorrowPostCommentModule { }