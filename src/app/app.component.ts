import { Component } from '@angular/core';
interface Data {
  name: string;
  projectName: string;
  hour: any;
  minute: any;
  second: any;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'open';
  text = '';
  isaddProject = false;
  projectName = '';
  count = 0;
  counter = 0;
  timeRef: any;
  startText = 'Start';
  running = false;
  tree = '';
  dataList: Data[] = [];
  displayTime: any;
  hour = '00';
  minute = '00';
  second: any;
  inputText(event: any) {
    this.text = event.target.value;
  }

  addProject() {
    this.isaddProject = true;
  }

  onCancel(event: any) {
    if (event == 'cancel') {
      this.isaddProject = false;
    }
  }

  getProjectName(event: any) {
    this.isaddProject = false;
    this.projectName = event;
  }

  startTimer() {
    this.running = !this.running;
    if (this.running) {
      this.startText = 'Stop';
      this.timeRef = setInterval(() => {
        this.counter++;
        if (this.counter < 60) {
          this.hour = '00';
          this.minute = '00';
          this.second = this.counter;
        }
        if (this.counter > 60 && this.counter < 3600) {
          this.hour = '00';
          this.minute = this.counter / 60 + '';
          this.second = this.counter - parseInt(this.minute) * 60;
        }
        if (this.counter >= 3600) {
          this.hour = this.counter / 3600 + '';
          this.minute = this.counter - parseInt(this.hour) * 60 + '';
          this.second =
            this.counter -
            parseInt(this.hour) * 60 +
            parseInt(this.minute) * 60;
        }
      }, 1000);
    } else {
      this.startText = 'Start';
      clearInterval(this.timeRef);
      this.dataList.push({
        name: this.text,
        projectName: this.projectName,
        hour: this.hour,
        minute: this.minute,
        second: this.counter,
      });
      this.counter = 0;
      this.hour = '00';
      this.minute = '00';
      this.text = '';
      this.projectName = '';
      this.tree = '';
    }
  }
}
