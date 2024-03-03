import {validateInput} from './validateForm'

//ELEMENTS FROM DOM
const nameInput = document.querySelector('.name-input');
const idInput = document.querySelector('.id-input');
const manufacturerInput = document.querySelector('.manufacturer-input');
const expirationDateInput = document.querySelector('.expiration-date-input');
const quantityInput = document.querySelector('.quantity-input');

const selectInput = document.querySelector('.select-input');
const volumeInput = document.querySelector('.volume-input');
const contentInput = document.querySelector('.content-input');

const errorMsg = document.querySelector('.error-message');

const submitButton = document.querySelector('.submit-button');

//ARRAYS
const products = [];
const liquidProducts = [];

//FORM VALIDATION
submitButton.addEventListener('click', (e)=>{
	e.preventDefault();
	validateInput(nameInput.value, manufacturerInput.value, expirationDateInput.value, selectInput.value, volumeInput.value, contentInput.value, errorMsg);
})

selectInput.addEventListener('change', ()=>{
	if(selectInput.value === 'liquid'){
		volumeInput.removeAttribute('disabled');
		contentInput.setAttribute('disabled', '');
		contentInput.value = '';
	} else if (selectInput.value === 'capsule'){
		volumeInput.setAttribute('disabled', '');
		contentInput.removeAttribute('disabled');
		volumeInput.value = '';
	}
})

CLASSES
class Product {
	constructor(name, manufacturer, date, quantity, volume){
		this.name = name;
		this.manufacturer = manufacturer;
		this.date = date;
		this.quantity = quantity;
		this.volume = volume;
		this.ID = Date.now();
	}
	static addProduct(product) {
		
	}
}

class LiquidProduct extends Product {
	constructor(name, manufacturer, date, quantity, content){
		super(name, manufacturer, date, quantity)
		this.content = content;
		this.ID = Date.now();
	}
}
