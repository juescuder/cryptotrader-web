import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tr[app-tableheader]',
  templateUrl: './tableheader.component.html',
  styleUrls: ['./tableheader.component.css']
})
export class TableheaderComponent implements OnInit {

  @Input() headers: Object[];

  constructor() { }

  ngOnInit() {
  }

}
