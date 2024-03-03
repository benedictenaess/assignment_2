const validateInput = (name, manufacturer, expirationDate, quantity,selectElement, volume, content, errorSpan)=>{
	let errors = {
		errorStatus: false,
		errorMsg: '',
	}
	if (!name || !manufacturer || !expirationDate || !quantity){
		errors = {
			errorStatus: true,
			errorMsg: 'All fields must be filled out'
		}
		errorSpan.style.visibility = 'visible';
		errorSpan.textContent = errors.errorMsg;
	} if (selectElement === 'select'){
		errors = {
			errorStatus: true,
			errorMsg: 'All fields must be filled out',
		}
		errorSpan.style.visibility = 'visible';
		errorSpan.textContent = errors.errorMsg;
	}else if(selectElement === 'liquid' && !volume){
		errors = {
			errorStatus: true,
			errorMsg: 'All fields must be filled out',
		}
		errorSpan.style.visibility = 'visible';
		errorSpan.textContent = errors.errorMsg;
	} else if (selectElement === 'capsule' && !content){
		errors = {
			errorStatus: true,
			errorMsg: 'All fields must be filled out',
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
	return {validationErrorStatus}
}

// const removeErrorMsg =(name, id, manufacturer, expirationDate, quantity, form, errorSpan)=>{
// 	if (name && manufacturer && expirationDate && quantity){
// 		errorSpan.style.visibility = 'hidden';
// 	}
// }

export {validateInput}