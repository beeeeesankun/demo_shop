import axios from 'axios';
let _products = [];
const NotInStock = [
  {
    id: 25,
    name: '新商品をお待ちください',
    src: require('@/assets/others/noimege.jpg'),
    gender: 'kids',
    itemCategory: 'アウター',
    price: '0',
    quantity: 0,
  },
  {
    id: 26,
    name: '新商品をお待ちください',
    src: require('@/assets/others/noimege.jpg'),
    gender: 'kids',
    itemCategory: 'ボトムス',
    price: '0',
    quantity: 0,
  },
  {
    id: 27,
    name: '新商品をお待ちください',
    src: require('@/assets/others/noimege.jpg'),
    gender: 'kids',
    itemCategory: 'セーター',
    price: '0',
    quantity: 0,
  },
  {
    id: 28,
    name: '新商品をお待ちください',
    src: require('@/assets/others/noimege.jpg'),
    gender: 'kids',
    itemCategory: 'シャツ',
    price: '0',
    quantity: 0,
  },
  {
    id: 29,
    name: '新商品をお待ちください',
    src: require('@/assets/others/noimege.jpg'),
    gender: 'kids',
    itemCategory: 'インナー',
    price: '0',
    quantity: 0,
  },
  {
    id: 30,
    name: '新商品をお待ちください',
    src: require('@/assets/others/noimege.jpg'),
    gender: 'kids',
    itemCategory: 'グッズ',
    price: '0',
    quantity: 0,
  },
  {
    id: 31,
    name: '新商品をお待ちください',
    src: require('@/assets/others/noimege.jpg'),
    gender: 'woman',
    itemCategory: 'セーター',
    price: '0',
    quantity: 0,
  },
  {
    id: 32,
    name: '新商品をお待ちください',
    src: require('@/assets/others/noimege.jpg'),
    gender: 'woman',
    itemCategory: 'インナー',
    price: '0',
    quantity: 0,
  },
  {
    id: 33,
    name: '新商品をお待ちください',
    src: require('@/assets/others/noimege.jpg'),
    gender: 'woman',
    itemCategory: 'シャツ',
    price: '0',
    quantity: 0,
  },
  {
    id: 34,
    name: '新商品をお待ちください',
    src: require('@/assets/others/noimege.jpg'),
    gender: 'woman',
    itemCategory: 'グッズ',
    price: '0',
    quantity: 0,
  },
  {
    id: 35,
    name: '新商品をお待ちください',
    src: require('@/assets/others/noimege.jpg'),
    gender: 'man',
    itemCategory: 'セーター',
    price: '0',
    quantity: 0,
  },
  {
    id: 36,
    name: '新商品をお待ちください',
    src: require('@/assets/others/noimege.jpg'),
    gender: 'man',
    itemCategory: 'インナー',
    price: '0',
    quantity: 0,
  },
  {
    id: 37,
    name: '新商品をお待ちください',
    src: require('@/assets/others/noimege.jpg'),
    gender: 'man',
    itemCategory: 'シャツ',
    price: '0',
    quantity: 0,
  },
  {
    id: 38,
    name: '新商品をお待ちください',
    src: require('@/assets/others/noimege.jpg'),
    gender: 'man',
    itemCategory: 'グッズ',
    price: '0',
    quantity: 0,
  },
];

axios
  .get('https://fukabeakihiro.com/demoEC/json.php')
  .then((res) => {
    _products = res.data;
    // srcの書き換え;
    _products.forEach((e) => {
      e.src = e.src.replace('..', 'https://fukabeakihiro.com/demoEC');
    });
    NotInStock.forEach((e) => {
      _products.push(e);
    });
    console.log(_products);
  })
  .catch((err) => {
    console.log('shop', err);
  });

export default {
  getProducts(cb) {
    setTimeout(() => cb(_products), 100);
  },
};
