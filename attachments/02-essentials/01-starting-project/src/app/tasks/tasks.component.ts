import { Component, Input } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { type NewTask } from './task/task.model';
import { FormComponent } from './form/form.component';
import { type UserType } from '../user/user.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, FormComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) user!: UserType;
  @Input() form = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.user.id);
  }

  close() {
    this.form = false;
    console.log('close form');
  }
}
