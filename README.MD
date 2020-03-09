## Tsoft wrapper for KNAWAT https://knawat.com/
Knawat s the The only one Multilingual Automate Dropshipping Platform with thousands of products. Start free and branded invoices, one-click setup and wholesale price.
and https://www.tsoft.com.tr/ Tsoft is ecommerce platform like shopify.
Here is just a simple wrapper of Tsoft APIs. For easier integration.

#### Way to login to the API console/documentation 
1 - Open this link in browser https://webservice.tsoft.com.tr/rest1/console
2 - Login using below given credentials
user:service
pass:serv1234

#### Steps/API to integrate to create order 
1 - get currency list https://webservice.tsoft.com.tr/rest1/console#product/getCurrencyList
2 - payment type list https://webservice.tsoft.com.tr/rest1/console#order2/getPaymentTypeList
3 - check what is subpayment type id SubPaymentTypeId
4 - get order status list https://webservice.tsoft.com.tr/rest1/console#order2/getOrderStatusList
5 - Add address to get address id 
https://webservice.tsoft.com.tr/rest1/console#customer/address
https://webservice.tsoft.com.tr/rest1/console#customer/getDeliveryAddresses
https://webservice.tsoft.com.tr/rest1/console#customer/getInvoiceAddresses
https://webservice.tsoft.com.tr/rest1/console#setting/getAddressFields
6 - get cargo list to get cargo code
https://webservice.tsoft.com.tr/rest1/console#order2/getCargoCompanyList
7 - Get product id required for PO
https://webservice.tsoft.com.tr/rest1/console#product/getProducts
https://webservice.tsoft.com.tr/rest1/console#product/getProductByName
https://webservice.tsoft.com.tr/rest1/console#product/find
8 - create customer and get customer id
https://webservice.tsoft.com.tr/rest1/console#customer/getCustomers
https://webservice.tsoft.com.tr/rest1/console#customer/addCustomers
9 - subProducts
https://webservice.tsoft.com.tr/rest1/console#subProduct/getSubProductsByParentIds

