const validateInput = (name, id, manufacturer, expirationDate, quantity, form, errorSpan)=>{
	let errors = {
		errorStatus: false,
		errorMsg: '',
	}
	if (!name || !id || !manufacturer || !expirationDate || !quantity || !form){
		errors = {
			errorStatus: true,
			errorMsg: 'All fields must be filled out'
		}
		errorSpan.style.visibility = 'visible';
		errorSpan.textContent = errors.errorMsg;
	} else {
		errors = {
			errorStatus: false,
			errorMsg: ''
		}
		errorSpan.style.visibility = 'hidden';
		errorSpan.textContent = errors.errorMsg;
	}
	
	const validationErrorStatus = ()=>{
		return errors.errorStatus
	}
	return {validateInput}
}

const removeErrorMsg =(name, id, manufacturer, expirationDate, quantity, form, errorSpan)=>{
	if (name && id && manufacturer && expirationDate && quantity && form){
		errorSpan.style.visibility = 'hidden';
	}
}