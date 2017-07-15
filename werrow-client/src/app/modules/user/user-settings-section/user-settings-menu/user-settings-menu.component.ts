import { Component, OnInit } from '@angular/core';

declare var componentHandler: any;
@Component({
    selector: 'app-user-settings-menu',
    templateUrl: './user-settings-menu.component.html'
})
export class UserSettingsMenuComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
    
    // Upgrade the DOM after content has been set so that
    // MDL style are applied
    // This technique is included in the MDL docs
    ngAfterContentChecked(){
        componentHandler.upgradeAllRegistered();
    }
}