import {validateInput} from './validateForm'

//ELEMENTS FROM DOM
const nameInput = document.querySelector('.name-input');
const manufacturerInput = document.querySelector('.manufacturer-input');
const expirationDateInput = document.querySelector('.expiration-date-input');
const selectInput = document.querySelector('.select-input');
const dosageInput = document.querySelector('.dosage-input');
const quantityInput = document.querySelector('.quantity-input');

const errorMsg = document.querySelector('.error-message');
const submitForm = document.querySelector('.input-form');
const productUl = document.querySelector('.product-ul');

//ARRAYS
const liquidProducts = [];
const capsuleProducts = [];

//ADDEVENTLISTENERS
submitForm.addEventListener('submit', (e)=>{
	e.preventDefault();
	const {validationErrorStatus} = validateInput(nameInput.value, manufacturerInput.value, expirationDateInput.value, selectInput.value, dosageInput.value, quantityInput.value, errorMsg);
	if (validationErrorStatus()){
		return
	} else {
		let newProduct;
		if (selectInput.value === 'liquid'){
			newProduct = new LiquidProduct(
				nameInput.value,
				manufacturerInput.value,
				expirationDateInput.value,
				selectInput.value,
				dosageInput.value
			);
		} else if (selectInput.value === 'capsule') {
			newProduct = new CapsuleProduct(
				nameInput.value,
				manufacturerInput.value,
				expirationDateInput.value,
				selectInput.value,
				quantityInput.value
			);
		}
		Product.addProduct(newProduct);
		// console.log(newProduct);
		const allProducts = [...liquidProducts, ...capsuleProducts];
		Display.renderProducts(allProducts);
		submitForm.reset();
	}
})

selectInput.addEventListener('change', ()=>{
	if(selectInput.value === 'liquid'){
		dosageInput.removeAttribute('disabled');
		quantityInput.setAttribute('disabled', '');
		quantityInput.value = '';
	} else if (selectInput.value === 'capsule'){
		dosageInput.setAttribute('disabled', '');
		quantityInput.removeAttribute('disabled');
		dosageInput.value = '';
	}
})

// CLASSES
class Product {
	constructor(name, manufacturer, expirationDate, form){
		this.name = name;
		this.manufacturer = manufacturer;
		this.expirationDate = expirationDate;
		this.form = form;
		this.ID = Date.now();
	}
	static addProduct(product) {
		if(product.form === 'liquid'){
			liquidProducts.push(product);
		} else if (product.form === 'capsule') {
			capsuleProducts.push(product);
		}
	}
	// static deleteProduct(id, productArray){
	// 	const index = productArray.findIndexOf(product => product.ID.toString() === id.toString());
	// 	if(index !== -1){
	// 		productArray.splice(index, 1);
	// 	}
	// }
}

class LiquidProduct extends Product {
	constructor(name, manufacturer, expirationDate, form, dosage){
		super(name, manufacturer, expirationDate, form)
		this.dosage = dosage;
		this.ID = Date.now();
	}
}

class CapsuleProduct extends Product {
	constructor(name, manufacturer, expirationDate, form, quantity){
		super(name, manufacturer, expirationDate, form)
		this.quantity = quantity;
		this.ID = Date.now();
	}
}

//DISPLAY CLASS
class Display {
	// static activeTab = 'liquid';

	static renderProducts(products) {
		productUl.textContent = '';
		products.forEach((product)=>{

			//ELEMENTS FROM DOM
			const productRow = document.createElement('li');
			const renderId = document.createElement('span');
			const renderName = document.createElement('span');
			const renderManufactorer = document.createElement('span');
			const renderExpirationDate = document.createElement('span');
			const renderForm = document.createElement('span');
			const renderQuantity = document.createElement('span');
			const renderRemove = document.createElement('span');
			const renderRemoveButton = document.createElement('button');
			
			//APPEND
			productUl.append(productRow);
			productRow.append(renderId, renderName, renderManufactorer, renderExpirationDate, renderForm, renderQuantity, renderRemove );
			renderRemove.append(renderRemoveButton);
			
			//ADD CLASSES HERE!!!!!!!!!!!!!!
			productRow.classList.add('product-row');
			renderRemoveButton.classList.add('delete-button');

			//TEXTCONTENT
			renderId.textContent = product.ID;
			renderName.textContent = product.name;
			renderManufactorer.textContent = product.manufacturer;
			renderExpirationDate.textContent = product.expirationDate;
			renderForm.textContent = product.form;
			renderRemoveButton.textContent = 'Delete';
			
			if(product instanceof CapsuleProduct){
				renderQuantity.textContent = `${product.quantity} mg`;
			}
			if((product instanceof LiquidProduct)) {
				renderQuantity.textContent = `${product.dosage} ml`;
			}
			
			//DELETE
			// productRow.dataset.id = product.ID;
			// renderRemoveButton.addEventListener('click', (e)=>{
			// 	const productId = e.currentTarget.parentElement.parentElement.dataset.id;
			// 	Product.deleteProduct(productId, product);
			// })
		})
	}
}
