function minLength(input, min, fieldName){
    if(input.length < min){
        return `${fieldName} must be at least ${min} characters long`
    }
    else{
        return '';
    }
}

export {minLength}