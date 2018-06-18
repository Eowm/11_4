function phone(brand, model, price, year, color) {
	this.brand = brand;
	this.model = model;
	this.price = price;
	this.year = year;
	this.color = color;
}

phone.prototype.printInfo = function() {
	console.log(this.brand + ' ' + this.model + ', price: ' + this.price +' PLN, year of production: ' + this.year + ', color: ' + this.color + '.');
	document.getElementById('tel').innerHTML = this.brand + ' ' + this.model + ', price: ' + this.price +' PLN, year of production: ' + this.year + ', color: ' + this.color + '.';
}

var SamsungGalaxyS8 = new phone('Samsung', 'GalaxyS8', 3500, 2018, 'black');
var IphoneX = new phone('Apple', 'IphoneX', 4500, 2018, 'gold');

SamsungGalaxyS8.printInfo();

IphoneX.printInfo();
