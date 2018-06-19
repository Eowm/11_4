function Phone(brand, model, price, year, color) {
	this.brand = brand;
	this.model = model;
	this.price = price;
	this.year = year;
	this.color = color;
}

Phone.prototype.printInfo = function() {
	console.log(this.brand + ' ' + this.model + ', price: ' + this.price +' PLN, year of production: ' + this.year + ', color: ' + this.color + '.');
	document.getElementById('tel').innerHTML = this.brand + ' ' + this.model + ', price: ' + this.price +' PLN, year of production: ' + this.year + ', color: ' + this.color + '.';
}

var samsungGalaxyS8 = new Phone('Samsung', 'GalaxyS8', 3500, 2018, 'black');
var iphoneX = new Phone('Apple', 'IphoneX', 4500, 2018, 'gold');

samsungGalaxyS8.printInfo();

iphoneX.printInfo();
