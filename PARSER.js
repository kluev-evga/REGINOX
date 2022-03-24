// (страница товара):

// title:
console.log(document.querySelector('[slot=title').innerText)

// price:
console.log(document.querySelector('[slot=price').innerText)

Артикул:
console.log(document.querySelector('[itemprop=sku]').getAttribute('content'));

// Картинки:
document.querySelectorAll('[media=" only screen and (min-width: 1024px)"]')
.forEach(item => console.log(item))

Характеристики:
const res = [...document.querySelectorAll('.def-list__group')].reduce((acc, item) => {
    const t = item.querySelector('.def-list__term').innerText;
    const d = item.querySelector('.def-list__definition').innerText;
    const obj = {t, d};
    acc.push(obj);
    return acc;
},[]);
console.log(res);


