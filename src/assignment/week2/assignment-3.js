const fs = require('fs');
const path = require('path');
// const format = require('date-fns').format;
const XLSX = require('xlsx');
const moment = require('moment');

// Use fs.readFile() to read the products.json file and convert it to JS object.
fs.readFile(path.join(__dirname, '/utils/product.json'), 'utf8', function(err, data) {
  if (err) {
    console.log('err ', err);
  }

  const products = JSON.parse(data.toString());

  // Create new field updated from dateUpdated with following format: MM/DD/YYYY
  // Delete dateUpdated field
  const updatedProducts = products.map(p => {
    const { dateUpdated, ...product } = p;
    // const updated = format(new Date(dateUpdated), 'MM/dd/yyyy');
    const updated = moment(new Date(dateUpdated)).format('MM/DD/YYYY');
    return {
      ...product,
      updated,
    };
  });

  const worksheet = XLSX.utils.json_to_sheet(updatedProducts);
  worksheet['!cols'] = [{ width: 15 }, { width: 30 }, { width: 20 }, { width: 20 }, { width: 20 }];

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Products');

  const buf = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });

  fs.writeFile(path.join(__dirname, '/utils/product.xlsx'), buf, err => console.log(err));
});
