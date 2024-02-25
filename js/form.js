$(document).ready(function() {
    const form = document.getElementById('form');
    const step1 = document.getElementById('step-1');
    const step2 = document.getElementById('step-2');
    const step3 = document.getElementById('step-3');

    const progressBar = document.querySelector('.progress-bar');

    const next1 = document.getElementById('next-1');
    const next2 = document.getElementById('next-2');
    const next3 = document.getElementById('next-2');
    const prev2 = document.getElementById('prev-2');
    const prev3 = document.getElementById('prev-3');

    function updateProgressStatus(currentProgress){
            const status = document.querySelector('.progress__info .progress__info__status');
            console.log('currentProgress === ', currentProgress);
            console.log('status === ', status);
            if(currentProgress == '33%'){
                status.textContent = 'Step 1 of 3';
            } else if(currentProgress == '66%'){
                status.textContent = 'Step 2 of 3';
            } else if(currentProgress == '100%'){
                status.textContent = 'Step 3 of 3';
            }
      }

    next1.addEventListener('click', function() {
        if (validateStep1()) {
            step1.classList.add('hidden');
            step2.classList.remove('hidden');
            progressBar.style.width = '66%';
            updateProgressStatus('66%');
        }
    });

    next2.addEventListener('click', function() {
        if (validateStep2()) {
            step2.classList.add('hidden');
            step3.classList.remove('hidden');
            progressBar.style.width = '100%';
            updateProgressStatus("100%");
        }
    });

    next3.addEventListener('click', function() {
        if (validateStep3()) {
            step3.classList.add('hidden');
            progressBar.style.width = '100%';
            updateProgressStatus("100%");
        }
    })

    prev2.addEventListener('click', function() {
        step2.classList.add('hidden');
        step1.classList.remove('hidden');
        progressBar.style.width = '33%';
        updateProgressStatus('33%');

    });

    prev3.addEventListener('click', function() {
        step3.classList.add('hidden');
        step2.classList.remove('hidden');
        progressBar.style.width = '66%';
        updateProgressStatus('66%');

    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateStep3()) {
            // Submit the form or perform further actions
            console.log("Form submitted successfully!");
        }
    });

    function validateStep1() {
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirmPassword');
        const email = document.getElementById('email');
        // (password.value === confirmPassword.value) &&
        if (( password.value === "" ) || (confirmPassword.value === "")  || (email.value === "" ) || (password.value !== confirmPassword.value)) {
          
          if(password.value === confirmPassword.value){
            confirmPassword.classList.add('is-invalid');
          }

          if(password.value === ""){
            password.classList.add('is-invalid');
          }

          if(confirmPassword.value === ""){
            confirmPassword.classList.add('is-invalid');
          }

          if(email.value === ""){
            email.classList.add('is-invalid');
          }
       
            return false;
        } else {
            password.classList.remove('is-invalid');
            confirmPassword.classList.remove('is-invalid');
            email.classList.remove('is-invalid');

            return true;
        }
    }

    function validateStep2() {
        const gender = document.getElementById('userGender');
        const preferredGender = document.getElementById('preferredGender');
        if ( (gender.value === "" || preferredGender.value === "" )) {

          if(gender.value === "")
           gender.classList.add('is-invalid');

          if(preferredGender.value === "")
           preferredGender.classList.add('is-invalid');

           return false;
        } else{ 
          gender.classList.remove('is-invalid');
          preferredGender.classList.remove('is-invalid');

          return true;
        }
    }

    function validateStep3() {
        const dob = document.getElementById('dob');
        const tacCheck = document.getElementById('tacCheck');
        if ((!dob.value || !tacCheck.checked) ) {
          if(status.textContent === 'Step 3 of 3'){
            dob.classList.add('is-invalid');
            tacCheck.classList.add('is-invalid');
            tacCheck.setCustomValidity("Check the terms and conditions");
          }

            return false;
        } else {
            dob.classList.remove('is-invalid');
            tacCheck.classList.remove('is-invalid');
            return true;
        }
    }
});