const validateInput = (name, manufacturer, expirationDate, selectElement, dosage, quantity, errorSpan)=>{
	let errors = {
		errorStatus: false,
		errorMsg: '',
	}
	if (!name || !manufacturer || !expirationDate || selectElement === 'select'){
		errors.errorStatus = true;
		errors.errorMsg = 'All fields must be filled out';
		errorSpan.style.visibility = 'visible';
	
	} else if (selectElement === 'liquid' && !dosage){
		errors.errorStatus = true;
		errors.errorMsg = 'All fields must be filled out';
		errorSpan.style.visibility = 'visible';

	} else if (selectElement === 'capsule' && !quantity){
		errors.errorStatus = true;
		errors.errorMsg = 'All fields must be filled out';
		errorSpan.style.visibility = 'visible';

	} else {
		errors.errorStatus = false;
		errors.errorMsg = '';
		errorSpan.style.visibility = 'hidden';
	}

	errorSpan.textContent = errors.errorMsg;
	
	const validationErrorStatus = ()=>{
		return errors.errorStatus
	}
	return {validationErrorStatus}
}

export {validateInput}