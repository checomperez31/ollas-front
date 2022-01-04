import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-toolbar',
    templateUrl: 'toolbar.component.html'
})
export class ToolbarComponent {

    @Output() toggle = new EventEmitter();

    constructor() {}

    toggleSidebar(): void {
        this.toggle.emit();
    }
}