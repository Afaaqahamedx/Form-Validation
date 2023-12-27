var nameError = document.getElementById('name-error')
var phoneError = document.getElementById('phone-error')
var mailError = document.getElementById('mail-error')
var submitError = document.getElementById('submit-error')
var messageError = document.getElementById('message-error')

function validateName(){
    var name = document.getElementById('contact-name').value;
    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: green;"></i>';
    return true;
}

function validatePhone(){
    var phone = document.getElementById('contact-phone').value;
    if(phone.length == 0){
        phoneError.innerHTML = 'Phone number is required';
        return false;
    }
    if(phone.length  !== 10){
        phoneError.innerHTML = 'Phone number should be 10 digits';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Only digits please';
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: green;"></i>';
    return true;
}



