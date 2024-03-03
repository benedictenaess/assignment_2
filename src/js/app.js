import {validateInput} from './validateForm'

//ELEMENTS FROM DOM
// const idInput = document.querySelector('.id-input');
// const quantityInput = document.querySelector('.quantity-input');
const nameInput = document.querySelector('.name-input');
const manufacturerInput = document.querySelector('.manufacturer-input');
const expirationDateInput = document.querySelector('.expiration-date-input');
const selectInput = document.querySelector('.select-input');
const volumeInput = document.querySelector('.volume-input');
const contentInput = document.querySelector('.content-input');

const errorMsg = document.querySelector('.error-message');

const submitForm = document.querySelector('.input-form');
const submitButton = document.querySelector('.submit-button');

//ARRAYS
const liquidProducts = [];
const capsuleProducts = [];

//ADDEVENTLISTENERS
submitForm.addEventListener('submit', (e)=>{
	e.preventDefault();
	let newProduct;
	if (selectInput.value === 'liquid'){
		newProduct = new Product(
			nameInput.value,
			manufacturerInput.value,
			expirationDateInput.value,
			selectInput.value,
			volumeInput.value
		);
	} else if (selectInput.value === 'capsule') {
		newProduct = new CapsuleProduct(
			nameInput.value,
			manufacturerInput.value,
			expirationDateInput.value,
			selectInput.value,
			contentInput.value
		);
	}
	Product.addProduct(newProduct);
	console.log(newProduct);
})

// submitButton.addEventListener('click', (e)=>{
// 	e.preventDefault();
// 	validateInput(nameInput.value, manufacturerInput.value, expirationDateInput.value, selectInput.value, volumeInput.value, contentInput.value, errorMsg);
// })

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

// CLASSES
class Product {
	constructor(name, manufacturer, expirationDate, form, quantityMl){
		this.name = name;
		this.manufacturer = manufacturer;
		this.expirationDate = expirationDate;
		this.form = form;
		this.quantityMl = quantityMl;
		this.ID = Date.now();
	}
	static addProduct(product) {
		if(product.form === 'liquid'){
			liquidProducts.push(product);
		} else if (product.form === 'capsule') {
			capsuleProducts.push(product);
		}
	}
}

class CapsuleProduct extends Product {
	constructor(name, manufacturer, expirationDate, form, quantityMg){
		super(name, manufacturer, expirationDate, form)
		this.quantityMg = quantityMg;
		this.ID = Date.now();
	}
}
