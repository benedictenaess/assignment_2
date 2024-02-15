class Product {
	constructor(name, id, manufacturer, date, quantity, volume){
		this.name = name;
		this.id = id;
		this.manufacturer = manufacturer;
		this.date = date;
		this.quantity = quantity;
		this.volume = volume;
		this.ID = Date.now();
	}
}

class LiquidProduct extends Product {
	constructor(name, id, manufacturer, date, quantity, content){
		super(name, id, manufacturer, date, quantity)
		this.content = content;
		this.ID = Date.now();
	}
}