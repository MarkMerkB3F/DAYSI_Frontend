import {Component, Input} from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {NgIf} from "@angular/common";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {Todo} from "../../../../todo";

@Component({
    selector: 'app-task-item',
    imports: [
        MatIcon,
        MatIconButton,
        NgIf,
        MatMenuTrigger,
        MatMenu,
        MatMenuItem,
    ],
    templateUrl: './task-item.component.html',
    styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent {
    @Input() task?: Todo;

    isExpanded = false;

    toggle() {
        this.isExpanded = !this.isExpanded;
    }
}
