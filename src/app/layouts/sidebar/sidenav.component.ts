import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-sidenav',
    templateUrl: 'sidenav.component.html'
})
export class SideNav {
    @Output() selectOption = new EventEmitter();
}