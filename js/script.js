const money = prompt('Ваш бюджет?');
var nameMarket = prompt('Название вашего магазина?');
var shopGoods = [];
const month = 30;
for (let i = 0; i < 3; i++) {
  shopGoods[i] = prompt('Какой тип товаров будем продавать?');
}
var employers = { 
	oneSotr: 'ivan petrov', 
	twoSotr: 'ptr ivanov'};
var mainList = {
	money, nameMarket, shopGoods, employers
};
alert("Ваш бюджет на каждый день: " + money / month);

