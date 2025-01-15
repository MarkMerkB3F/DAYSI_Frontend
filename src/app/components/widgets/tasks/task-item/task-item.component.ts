import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {NgIf} from "@angular/common";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";

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
    task = {
        name: 'Task 1',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores ',
    };

    isExpanded = false;

    toggle() {
        this.isExpanded = !this.isExpanded;
    }
}
