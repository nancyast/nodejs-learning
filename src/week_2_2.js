const fs = require('fs');
const path = require('path');
const formatDistance = require('date-fns/formatDistance');
const viLocale = require('date-fns/locale/vi');

// Use fs.readFile() to read the products.json file and convert it to JS object.
fs.readFile(path.join(__dirname, '/utils/product.json'), 'utf8', function(err, data) {
  if (!err) {
    const products = JSON.parse(data.toString());

    // Print the total number of products to console.
    console.log('Total number of products ', products.length);

    // Convert dateUpdated of each item into real Date.
    const updatedProducts = products.map(p => ({
      ...p,
      dateUpdated: new Date(p.dateUpdated),
    }));

    // Print the list to the console with following template for each product.
    // ${name} - ${price}VND - Cập nhật cách đây: ${fromNow}
    updatedProducts.forEach(product => {
      const price = formatMoney(product.price);
      const fromNow = distanceFromNow(product.dateUpdated);
      console.log(`${product.id} - ${product.name} - ${price} - Cập nhật cách đây: ${fromNow}`);
    });
  }
});

const formatMoney = money => {
  return `${money.toFixed(0).replace(/\d(?=(\d{3})+$)/g, '$&,')}VND`;
};

const distanceFromNow = dateUpdated => {
  return formatDistance(new Date(dateUpdated), new Date(), { locale: viLocale });
};
