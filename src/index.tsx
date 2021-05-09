import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Venda PS4',
          type: 'deposit',
          category: 'sell',
          amount: 1400,
          createdAt: new Date('2021-02-12'),
        },
        {
          id: 2,
          title: 'Netflix',
          type: 'withdraw',
          category: 'training',
          amount: 45,
          createdAt: new Date('2021-02-28'),
        },
        {
          id: 3,
          title: 'Monitor',
          type: 'withdraw',
          category: 'electronic',
          amount: 400,
          createdAt: new Date('2021-03-08'),
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    });
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
