import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css'],
})
export class AddProjectComponent implements OnInit {
  @Output() cancel = new EventEmitter();
  @Output() create = new EventEmitter();
  projectName = '';
  constructor() {}

  ngOnInit(): void {}

  onCancel() {
    this.cancel.emit('cancel');
  }

  onCreate() {
    this.create.emit(this.projectName);
  }

  typeProject(event: any) {
    this.projectName = event.target.value;
  }
}
