const fetch = require('node-fetch');
const FormData = require('form-data');

const webService = 'https://webservice.tsoft.com.tr/rest1';
const authorization = { token: 'mpicnp4nhmog1epuitt6qvcsii' }; // Token expires

module.exports = {
  request({ path, method = 'get', body }) {
    const form = this.jsonToFormData(body);
    return fetch(path, {
      method,
      body: form
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
      FetchProductData: 'false',
      FetchCustomerData: 'false',
      FetchInvoiceAddress: 'true',
      FetchDeliveryAddress: 'false',
      FetchCampaignData: 'false',
      FetchOrderContract: 'false',
      FetchDeleteds: 'false',
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
    const orderId = 2;
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
  setTransferredStatus() {
    const body = {
      ...authorization,
      data: JSON.stringify([{ OrderId: '3', IsTransferred: '0' }])
    };
    return this.request({
      path: `${webService}/order2/setTransferredStatus`,
      method: 'POST',
      body
    }).catch(err => {
      throw new Error(err.message, err.code);
    });
  },
  updateOrderStatusAsCargoReady() {
    const body = {
      ...authorization,
      data: JSON.stringify([{ OrderCode: 'TS06033' }]),
      Archive: '' // Send 1 for archived members
    };
    return this.request({
      path: `${webService}/order2/updateOrderStatusAsCargoReady`,
      method: 'POST',
      body
    }).catch(err => {
      throw new Error(err.message, err.code);
    });
  },
  updateOrderStatusAsDelivered() {
    const body = {
      ...authorization,
      data: JSON.stringify([{ OrderCode: 'TS06033' }]),
      Archive: '' // Send 1 for archived members
    };
    return this.request({
      path: `${webService}/order2/updateOrderStatusAsDelivered`,
      method: 'POST',
      body
    }).catch(err => {
      throw new Error(err.message, err.code);
    });
  },
  updateOrderStatusAsSentToCargo() {
    const body = {
      ...authorization,
      data: JSON.stringify([
        { OrderCode: 'TS06033', CargoCode: 'T1', CargoTrackingCode: 'ER34342' }
      ])
    };
    return this.request({
      path: `${webService}/order2/updateOrderStatusAsSentToCargo`,
      method: 'POST',
      body
    }).catch(err => {
      throw new Error(err.message, err.code);
    });
  },
  updateOrderStatusAsCancelled() {
    const body = {
      ...authorization,
      data: JSON.stringify([{ OrderCode: 'TS06033' }]),
      Archive: '' // Send 1 for archived members
    };
    return this.request({
      path: `${webService}/order2/updateOrderStatusAsCancelled`,
      method: 'POST',
      body
    }).catch(err => {
      throw new Error(err.message, err.code);
    });
  },
  updateInvoiceDetails() {
    const body = {
      ...authorization,
      data: JSON.stringify([
        {
          OrderCode: 'TS06033',
          InvoiceDate: '2015-10-12T07:09:00Z',
          InvoiceNumber: '1111',
          WaybillNumber: '2222',
          IsInvoiced: '1'
        }
      ])
    };
    return this.request({
      path: `${webService}/order2/updateInvoiceDetails`,
      method: 'POST',
      body
    }).catch(err => {
      throw new Error(err.message, err.code);
    });
  },
  delete() {
    const body = {
      ...authorization,
      data: JSON.stringify([{ OrderId: '2' }])
    };
    return this.request({
      path: `${webService}/order2/deleteOrders`,
      method: 'post',
      body
    }).catch(err => {
      throw new Error(err.message, err.code);
    });
  },
  buildFormData(formData, data, parentKey) {
    if (data && typeof data === 'object' && !(data instanceof Date)) {
      Object.keys(data).forEach(key => {
        this.buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
      });
    } else {
      const value = data == null ? '' : data;
      formData.append(parentKey, value);
    }
  },
  jsonToFormData(data) {
    const formData = new FormData();
    this.buildFormData(formData, data);
    return formData;
  }
};
