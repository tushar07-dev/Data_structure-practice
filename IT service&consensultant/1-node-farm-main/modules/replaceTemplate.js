module.exports = (temp, product) =>{
    let output = temp.replace(/{%PRODUCTNAME%}/g , product.productName);
    output = output.replace(/{%IMAGE%}/g , product.image);
    output = output.replace(/{%QUANTITY%}/g , product.quantity);
    output = output.replace(/{%PRICE%}/g , product.price);
    output = output.replace(/{%COUNTRY%}/g , product.country);
    output = output.replace(/{%ID%}/g , product.id);
  
    if(!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g , 'not-organic');
  
    return output;
  }