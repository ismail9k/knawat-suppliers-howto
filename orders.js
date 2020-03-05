const fetch = require('node-fetch');

const webService = 'https://webservice.tsoft.com.tr/rest1';
const authorization = { token: 'gfqd9bps0pan945f2i5d3edadt' };

module.exports = {
  request({ path, method = 'get', body }) {
    return fetch(path, {
      method,
      body: JSON.stringify(body)
    }).then(async res => {
      const parsedRes = await res.json();
      if (!res.ok) {
        throw new Error('Something went wrong.');
      }
      return parsedRes;
    });
  },
  list() {
    const body = {
      ...authorization,
      OrderDateTimeStart: '',
      OrderDateTimeEnd: '',
      UpdateDateTimeStart: '',
      UpdateDateTimeEnd: '',
      OrderCode: '',
      OrderStatusId: '',
      IsTransferred: '',
      Archive: '',
      FetchProductData: false,
      FetchCustomerData: false,
      FetchInvoiceAddress: false,
      FetchDeliveryAddress: false,
      FetchCampaignData: false,
      FetchOrderContract: false,
      FetchDeleteds: false,
      start: '',
      limit: '',
      columns: '',
      f: '',
      orderby: ''
    };
    return this.request({
      path: `${webService}/order/get`,
      method: 'post',
      body
    }).catch(err => {
      throw new Error(err.message, err.code);
    });
  },
  get() {
    const body = {
      ...authorization,
      Archive: '',
      start: '',
      limit: '',
      columns: '',
      f: '',
      orderby: ''
    };
    const orderId = '';
    return this.request({
      path: `${webService}/order2/getOrderDetailsByOrderId/${orderId}`,
      method: 'post',
      body
    }).catch(err => {
      throw new Error(err.message, err.code);
    });
  },
  // NOTE : Create method is not ready for production
  create() {},
  update() {},
  delete() {

    const body = [
      {
        OrderId: ''
      }
    ];
    return this.request({
      path: `${webService}/order2/deleteOrders`,
      method: 'post',
      body
    }).catch(err => {
      throw new Error(err.message, err.code);
    });
  }
};
