/* Author: 

*/

var amount = document.querySelector('.amount');
amount.addEventListener('change', function() {
    document.querySelector('.get-amount').innerHTML = amount.value;
} );

var month = document.querySelector('.months');
var submit = document.querySelector('.get-loan button');
var modal = document.querySelector('.modal');
submit.addEventListener('click', function(e) {
    e.preventDefault();
    var checkAmount = validate(amount);
    var checkMonth = validate(month);
    if(checkAmount && checkMonth) {
        modal.classList.add('modalShow');
        document.querySelector('.show-amount').innerHTML = amount.value;
        document.querySelector('.show-month').innerHTML = month.value;
    }
});

function validate(element) {
    if (element.value == '') {
        element.nextElementSibling.classList.add('show');
        return false;
    }
    else {
        if(element.nextElementSibling.classList.contains('show')) {
            element.nextElementSibling.classList.remove('show');
        }
        return true;
    }
}

//modal close
document.querySelector('.modal').addEventListener('click', function() {
    document.querySelector('.modal').classList.remove('modalShow');
});

document.querySelector('.loan-submit').addEventListener('click', function(e) {e.stopPropagation();});


// modal form validate
var modalSubmit = document.querySelector('.loan-submit button');
modalSubmit.addEventListener('click', function(e) {
    e.stopPropagation();
    e.preventDefault();
     
    var emailRegex = /^([0-9a-zA-Z\_\.\-]+)@([a-zA-Z]+)\.([a-zA-Z]+)$/;
    var emailCheck = inputValidate(document.querySelector('.modal .email'),emailRegex);
    var phoneRegex = /^\d{10}$/;
    var phoneCheck = inputValidate(document.querySelector('.modal .phone-no'),phoneRegex);
    
    if (emailCheck && phoneCheck) {
        document.querySelector('.modal form').reset();
        document.querySelector('.successfully').classList.add('ok-display');
    }

});

document.querySelector('.successfully a').addEventListener('click', function() {
    document.querySelector('.successfully').classList.remove('ok-display');
});

function inputValidate(input,regex) {
    
    if (input.value == null || input.value == '') {
        input.nextElementSibling.classList.add('error');
        input.nextElementSibling.textContent = "This field is required";
        return false;
    }
    else if (!regex.test(input.value)) {
        input.nextElementSibling.classList.add('error');
        input.nextElementSibling.textContent = "your entry is invaild";
        return false;
    }
    else {
        if ( input.nextElementSibling.classList.contains('error')) {
            input.nextElementSibling.classList.remove('error');
        }
        return true;
    }
}