// DECLARING VARIABLES
let fm = document.getElementById('contact');
let bn = document.getElementById('submit-button');
let fn = document.getElementById('fullname');
let em = document.getElementById('email');
let msg = document.getElementById('message');

let regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

// Validate form
function formValidator(ev) {

    // start with these 2 empty buckets at the beginning
    let data = {};
    let errors = [];

    // validation for fullname
    if (fn.value !== '') {
        data.fullName = fn.value;
    } else {
        errors.push('Full name is missing');
    }


    // validation for email
    if (em.value !== '') {
        // Check if email is valid.
        if (regex.test(em.value)) {
            data.email = em.value;
         } else { 
            errors.push('Email is invalid'); 
         }
    } else {
        errors.push('Email is missing');
    }

    // validation for message
    if (msg.value !== '') {
        data.message = msg.value;
    } else {
        errors.push('Message name is missing!');
    }


    // Check if there is anything in array errors
    if (errors.length !== 0) {
        console.log('ERRORS', errors);
    } else {
        console.log('COLLECTED DATA', data);
        // Clear text-fields
        fn.value = '';
        em.value = '';
        msg.value = '';
    }
}
// Register form to "click" event
bn.addEventListener('click', formValidator);