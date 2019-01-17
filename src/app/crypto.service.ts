import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor(private http: HttpClient) { }

  getExchanges() {
    return [
      {
        exchangeId: 1,
        exchangeName: "Binance"
      },
      {
        exchangeId: 2,
        exchangeName: "Bittrex"
      },
      {
        exchangeId: 3,
        exchangeName: "Cryptopia"
      },
      {
        exchangeId: 4,
        exchangeName: "Poloniex"
      },
      {
        exchangeId: 5,
        exchangeName: "Coinbase"
      },
      {
        exchangeId: 6,
        exchangeName: "Kraken"
      },
      {
        exchangeId: 7,
        exchangeName: "Bitfinex"
      }
    ];
  }

  getSymbols() {
    return [
      {
        symbolId: 1,
        symbolName: "BTC"
      },
      {
        symbolId: 2,
        symbolName: "ETH"
      },
      {
        symbolId: 3,
        symbolName: "XRP"
      },
      {
        symbolId: 4,
        symbolName: "BCH"
      }
    ];
  }

  getCoin(symbol) {
    return this.http.get('http://localhost:3000/exchange/coin/' + symbol);
  }
}
