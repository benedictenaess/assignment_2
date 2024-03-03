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

const productUl = document.querySelector('.product-ul');

//ARRAYS
const liquidProducts = [];
const capsuleProducts = [];

//ADDEVENTLISTENERS
submitForm.addEventListener('submit', (e)=>{
	e.preventDefault();
	// validateInput(nameInput.value, manufacturerInput.value, expirationDateInput.value, selectInput.value, volumeInput.value, contentInput.value, errorMsg);
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
	const allProducts = [...liquidProducts, ...capsuleProducts];
	Display.renderProducts(allProducts);
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
	// static deleteProduct(id, productArray){
	// 	const index = productArray.findIndexOf(product => product.ID.toString() === id.toString());
	// 	if(index !== -1){
	// 		productArray.splice(index, 1);
	// 	}
	// }
}

class CapsuleProduct extends Product {
	constructor(name, manufacturer, expirationDate, form, quantityMg){
		super(name, manufacturer, expirationDate, form)
		this.quantityMg = quantityMg;
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
			
			//TEXTCONTENT
			renderId.textContent = product.ID;
			renderName.textContent = product.name;
			renderManufactorer.textContent = product.manufacturer;
			renderExpirationDate.textContent = product.expirationDate;
			renderForm.textContent = product.form;
			renderRemoveButton.textContent = 'Delete';
			
			if(product instanceof CapsuleProduct){
				renderQuantity.textContent = `${product.quantityMg} mg`;
			}
			if(!(product instanceof CapsuleProduct)) {
				renderQuantity.textContent = `${product.quantityMl}`;
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
