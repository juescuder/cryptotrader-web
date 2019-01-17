import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CryptoService } from '../crypto.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  exchanges = [];
  symbols = [];
  coins = [];

  constructor(private data: CryptoService) { }

  ngOnInit() {

    this.exchanges = this.data.getExchanges();

    this.symbols = this.data.getSymbols();

    this.symbols.forEach(sym => {
      this.data.getCoin(sym.symbolName).subscribe(data => {
        this.coins.push(data);
      });
    });
  }

}
