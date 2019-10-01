const fs = require('fs');
const format = require('date-fns').format;
const XLSX = require('xlsx');

// Use fs.readFile() to read the products.json file and convert it to JS object.
fs.readFile(__dirname + '/utils/product.json', 'utf8', function(err, data) {
  if (!err) {
    const products = JSON.parse(data.toString());

    // Create new field updated from dateUpdated with following format: MM/DD/YYYY
    // Delete dateUpdated field
    const updatedProducts = products.map(p => {
      const { dateUpdated, ...product } = p;
      const updated = format(new Date(dateUpdated), 'MM/dd/yyyy');
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

    fs.writeFile(__dirname + '/utils/product.xlsx', buf, err => console.log(err));
  }
});
