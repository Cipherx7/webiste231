import { Stock } from '../types/stock';

export const mockStocks: Stock[] = [
  {
    symbol: 'LAVEL',
    name: 'Lavel Industries Ltd',
    price: 42.50,
    change: 3.20,
    changePercent: 8.14
  },
  {
    symbol: 'ACC',
    name: 'ACC Limited',
    price: 2300.50,
    change: 234.30,
    changePercent: 11.34
  },
  // ... existing stocks ...
  {
    symbol: 'RELIANCE',
    name: 'Reliance Industries',
    price: 1250.75,
    change: 45.25,
    changePercent: 3.75
  },
  {
    symbol: 'HDFC',
    name: 'HDFC Bank',
    price: 1678.90,
    change: 28.50,
    changePercent: 1.73
  },
  // Adding more stocks...
  {
    symbol: 'INFY',
    name: 'Infosys Limited',
    price: 875.60,
    change: -12.40,
    changePercent: -1.40
  },
   {"symbol": "RELIANCE", "name": "Reliance Industries Ltd.", "price": 1221.05, "change": 0.37, "changePercent": 0.03},
  {"symbol": "TCS", "name": "Tata Consultancy Services Ltd.", "price": 4164.85, "change": -0.40, "changePercent": -0.01},
  {"symbol": "HDFCBANK", "name": "HDFC Bank Ltd.", "price": 1798.25, "change": 0.34, "changePercent": 0.02},
  {"symbol": "BHARTIARTL", "name": "Bharti Airtel Ltd.", "price": 1599.85, "change": -0.03, "changePercent": 0.00},
  {"symbol": "ICICIBANK", "name": "ICICI Bank Ltd.", "price": 1307.15, "change": 0.69, "changePercent": 0.05},
  {"symbol": "INFY", "name": "Infosys Ltd.", "price": 1916.55, "change": -0.71, "changePercent": -0.04},
  {"symbol": "SBIN", "name": "State Bank of India", "price": 799.55, "change": 0.03, "changePercent": 0.00},
  {"symbol": "ITC", "name": "ITC Ltd.", "price": 478.90, "change": 0.35, "changePercent": 0.07},
  {"symbol": "LICI", "name": "Life Insurance Corporation of India", "price": 887.60, "change": -0.02, "changePercent": 0.00},
  {"symbol": "HINDUNILVR", "name": "Hindustan Unilever Ltd.", "price": 2340.25, "change": 0.25, "changePercent": 0.01},
  {"symbol": "HCLTECH", "name": "HCL Technologies Ltd.", "price": 1891.65, "change": -0.35, "changePercent": -0.02},
  {"symbol": "LT", "name": "Larsen & Toubro Ltd.", "price": 3608.30, "change": 0.30, "changePercent": 0.01},
  {"symbol": "SUNPHARMA", "name": "Sun Pharmaceutical Industries Ltd.", "price": 1861.70, "change": 0.70, "changePercent": 0.04},
  {"symbol": "BAJFINANCE", "name": "Bajaj Finance Ltd.", "price": 6910.10, "change": -0.10, "changePercent": 0.00},
  {"symbol": "M&M", "name": "Mahindra & Mahindra Ltd.", "price": 3050.10, "change": 2.47, "changePercent": 0.08},
  {"symbol": "KOTAKBANK", "name": "Kotak Mahindra Bank Ltd.", "price": 1759.50, "change": 0.50, "changePercent": 0.03},
  {"symbol": "MARUTI", "name": "Maruti Suzuki India Ltd.", "price": 10938.20, "change": 0.39, "changePercent": 0.00},
  {"symbol": "AXISBANK", "name": "Axis Bank Ltd.", "price": 950.00, "change": 0.50, "changePercent": 0.05},
  {"symbol": "TITAN", "name": "Titan Company Ltd.", "price": 3310.00, "change": -0.31, "changePercent": -0.01},
  {"symbol": "ULTRACEMCO", "name": "UltraTech Cement Ltd.", "price": 11400.00, "change": -0.50, "changePercent": 0.00},
  {"symbol": "WIPRO", "name": "Wipro Ltd.", "price": 550.00, "change": -0.20, "changePercent": -0.04},
  {"symbol": "ONGC", "name": "Oil & Natural Gas Corporation Ltd.", "price": 150.00, "change": 0.10, "changePercent": 0.07},
  {"symbol": "POWERGRID", "name": "Power Grid Corporation of India Ltd.", "price": 220.00, "change": 0.20, "changePercent": 0.09},
  {"symbol": "NTPC", "name": "NTPC Ltd.", "price": 180.00, "change": 0.15, "changePercent": 0.08},
  {"symbol": "SBILIFE", "name": "SBI Life Insurance Company Ltd.", "price": 1250.00, "change": 0.50, "changePercent": 0.04},
  {"symbol": "ASIANPAINT", "name": "Asian Paints Ltd.", "price": 3200.00, "change": -0.20, "changePercent": -0.01},
  {"symbol": "BAJAJFINSV", "name": "Bajaj Finserv Ltd.", "price": 15000.00, "change": 0.00, "changePercent": 0.00},
  {"symbol": "HDFCLIFE", "name": "HDFC Life Insurance Company Ltd.", "price": 700.00, "change": 0.00, "changePercent": 0.00},
  {"symbol": "TATAMOTORS", "name": "Tata Motors Ltd.", "price": 500.00, "change": 0.50, "changePercent": 0.10},
  {"symbol": "TECHM", "name": "Tech Mahindra Ltd.", "price": 1500.00, "change": -0.50, "changePercent": -0.03},
  {"symbol": "INDUSINDBK", "name": "IndusInd Bank Ltd.", "price": 954.00, "change": 2.37, "changePercent": 0.25},
  {"symbol": "DRREDDY", "name": "Dr. Reddy's Laboratories Ltd.", "price": 1392.00, "change": 2.72, "changePercent": 0.20},
  {"symbol": "DIVISLAB", "name": "Divi's Laboratories Ltd.", "price": 3500.00, "change": -0.50, "changePercent": -0.01},
  
  // ... adding 95 more stocks with realistic names and prices ...
  {
    symbol: 'ZEEL',
    name: 'Zee Entertainment',
    price: 234.55,
    change: -5.45,
    changePercent: -2.27
  }
// ].concat(Array.from({ length: 95 }, (_, i) => ({
//  symbol: `STK${(i + 1).toString().padStart(3, '0')}`,
//  name: `Stock ${i + 1} Limited`,
//  price: Math.round(Math.random() * 1000 * 100) / 100,
//  change: Math.round((Math.random() * 40 - 20) * 100) / 100,
//  changePercent: Math.round((Math.random() * 10 - 5) * 100) / 100
// })));

  
 
// ::contentReference[oaicite:0]{index=0}
 
]
