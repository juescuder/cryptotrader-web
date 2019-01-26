import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SymbolModel } from './symbol-model';

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
      },
      {
        exchangeId: 8,
        exchangeName: "OKEx"
      },
      {
        exchangeId: 9,
        exchangeName: "BitZ"
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
      },
      {
        symbolId: 5,
        symbolName: "LTC"
      },
      {
        symbolId: 6,
        symbolName: "ZEC"
      },
      {
        symbolId: 7,
        symbolName: "XMR"
      },
      {
        symbolId: 8,
        symbolName: "ETC"
      },
      {
        symbolId: 9,
        symbolName: "BSV"
      },
      {
        symbolId: 10,
        symbolName: "TRX"
      },
      {
        symbolId: 11,
        symbolName: "NEO"
      }
    ];
  }

  getCoin(symbol):Observable<any> {
    return this.http.get('https://cryptotrader-api.herokuapp.com/exchange/coin/' + symbol);
    //return this.http.get('http://localhost:3000/exchange/coin/' + symbol);
  }
}
