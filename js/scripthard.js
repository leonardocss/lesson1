let num = 33721;
let str = String(num);
let summ = 1;
var array = [1,2,7,3,3];
for (var i = 0 ; i < str.length; i++) {
	array[i] = num % 10;
	num = Math.floor(num / 10);
}
for (var i = array.length -1; i > 0 ; i--) {
	summ *= array[i];
}
console.log(summ);
console.log(Math.pow(summ, 3));
