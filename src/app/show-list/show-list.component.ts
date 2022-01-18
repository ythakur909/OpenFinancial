import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css'],
})
export class ShowListComponent implements OnInit {
  @Input() data: any;
  constructor() {}

  ngOnInit(): void {}

  onRemove(index: number) {
    this.data.splice(index, 1);
  }
}
