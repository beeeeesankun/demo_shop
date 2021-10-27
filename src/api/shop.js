import axios from 'axios';
let _products = [];

axios
  .get('https://fukabeakihiro.com/demoEC/json.php')
  .then((res) => {
    _products = res.data;
    //srcの書き換え
    _products.forEach((e) => {
      e.src = e.src.replace('..', 'https://fukabeakihiro.com/demoEC');
    });
  })
  .catch((err) => {
    console.log('shop', err);
  });

export default {
  getProducts(cb) {
    setTimeout(() => cb(_products), 100);
  },
};
