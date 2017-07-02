import { NgModule, Optional, SkipSelf } from '@angular/core';
import { GoogleMapService } from '../../services/google-map.service';
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
export class CoreModule {
    constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
            'CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
