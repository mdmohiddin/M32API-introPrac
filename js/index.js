const user = { id: 11, name: 'Gorib Amir', job: 'Actor' };
const stringified1 = JSON.stringify(user);

// console.log(user);
// console.log(stringified1)

const shop = {
      name: 'Alia Store',
      address: 'Ranbir road',
      profit: 15000,
      products: ['laptop', 'mobile', 'pepsi'],
      owner: {
            name: 'Alia Bhatt',
            profesion: 'Actor'
      },
      isExpensive: false
}
// console.log(shop);

const shopStringified2 = JSON.stringify(shop);

console.log(shopStringified2);

const converted = JSON.parse(shopStringified2);
console.log(converted.owner);
