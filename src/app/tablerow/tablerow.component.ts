import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tr[app-tablerow]',
  templateUrl: './tablerow.component.html',
  styleUrls: ['./tablerow.component.css']
})
export class TablerowComponent implements OnInit {

  @Input() coinItem: Object;

  constructor() { }

  ngOnInit() {
  }

}
