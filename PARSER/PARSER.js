const id = document.querySelector('[itemprop=sku]').getAttribute('content');
const title = document.querySelector('[slot=title').innerText;
const price = document.querySelector('[slot=price').innerText
const specs = [...document.querySelectorAll('.def-list__group')].reduce((acc, item) => {
    const dt = item.querySelector('.def-list__term').innerText;
    const dd = item.querySelector('.def-list__definition').innerText;
    const obj = {dt, dd};
    acc.push(obj);
    return acc;
},[]);
const images = [...document.querySelectorAll('[media=" only screen and (min-width: 1024px)"]')]
.map(item => {
    const atr = item.getAttribute('srcset');
    const sliced = atr.split('/').slice(-1).join();
    const slicedClean = sliced.split('.').slice(0,1).join();
    return '/assets/products/' + slicedClean + '.webp';
});
const res = {id, title, price, specs, images};
const img = [...document.querySelectorAll('[media=" only screen and (min-width: 1024px)"]')]
.map(item => item.getAttribute('srcset'));
console.log(res);
console.log(img);