const shop = {
    name: 'mohammod juwel islam',
    address: {
        street: 'Sutibari bazar',
        country: 'Bangladesh',
        city: 'Nilfamari',
    },
    products: ['landing page', 'multiply page', 'ecommerce website'],
    isOpens: true,
    isNew: false
}

const shopJsonString = JSON.stringify(shop);
console.log(typeof shopJsonString);
console.log(shopJsonString);
// console.log(JSON.parse(shopJsonString));
const shopJsonParse = JSON.parse(shopJsonString);
console.log(shopJsonParse)