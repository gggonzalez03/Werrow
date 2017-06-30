import { NgModule } from '@angular/core';
import { GoogleMapService } from '../../components/google-map/google-map.service';
import { UserService } from '../../services/user.service';
import { BorrowRequestService } from '../../services/borrow-request.service';
import { CommentService } from '../../services/comment.service';

@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [
        GoogleMapService,
        UserService,
        BorrowRequestService,
        CommentService
    ],
})
export class CoreModule { }
