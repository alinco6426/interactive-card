
let infoGetters = document.getElementsByClassName("info-getters");
let alertMessagee = document.getElementsByClassName("alert");
let feedBackMessage = document.getElementById("feed-back-container");
let creditInfoContainer = document.getElementById("form");
let valid = true;
let userName = document.getElementById("username");
let cardNumberDisplayer = document.getElementById("card-no-displayer");
let expMonthDisplayer = document.getElementById("exp-month-displayer");
let expYearDisplayer = document.getElementById("exp-year-displayer");
let cardCodeDisplayer = document.getElementById("card-code-displayer");






let userNameGetter = infoGetters[0];

    userNameGetter.addEventListener("input", function () {

        validateField(this, 0, /^[A-Za-z ]+$/,"letters");
            userName.textContent = this.value === "" ? "James Appleseed" : this.value.trim();
    })
 

// EACH INPUT FUNCTION FOR REAL TIME UPDATE START HERE 

    let CardNumberGetter = infoGetters[1];

    CardNumberGetter.addEventListener("input", function () {

        validateField(this, 1, /^[0-9]+$/,"numbers");
        cardNumberDisplayer.textContent = this.value.trim() === "" ?"0000 0000 0000 0000" : this.value.trim().match(/\d{0,4}/g).join(" ");
    })
 



    let expMonthGetter = infoGetters[2];
    
    expMonthGetter.addEventListener("input", function () {

        validateField(this, 2, /^[0-9]+$/,"numbers",12);
            expMonthDisplayer.textContent = this.value.trim() === ""? "00" : this.value.trim();
    })
    


    let expYearGetter = infoGetters[3];

    expYearGetter.addEventListener("input", function () {

        validateField(this, 3, /^[0-9]+$/,"numbers");
        expYearDisplayer.textContent = this.value === "" ? "00" : this.value.trim();

    })
    

let cardCodeGetter = infoGetters[4];

cardCodeGetter.addEventListener("input", function () {

    validateField(this, 4, /^[0-9]+$/,"numbers");
    cardCodeDisplayer.textContent = this.value === "" ? "000" : this.value.trim().replace(/[0-9]/g, "*");
});


// EACH INPUT FUNCTION FOR REAL TIME UPDATE ENDS HERE 


// FUNTION TO CHECK IF THE VALUES ARE CORRECT WHEN THE SUBMIT BUTTON IS CLICKED STARTS HERE

function validateField(getter, index, regex,format, requireValue = null,minLength,maxLength) {

    let fieldValue = getter.value.trim();
    let alertMessage = alertMessagee[index];

    if (fieldValue === "") {

        alertMessage.textContent = "This field can't be empty";
        getter.classList.add("error");
        valid = false;

    } else if (!fieldValue.match(regex)) {

        alertMessage.textContent = `Wrong format ${format} only`;
        getter.classList.add("error");
        valid = false;

    }else if( fieldValue.length < minLength){

        alertMessage.textContent =  `cannot be less than ${minLength}`;
        getter.classList.add("error");
        valid = false;

    }else if( fieldValue.length > maxLength){

        alertMessage.textContent = `cannot be greater than ${maxLength}`;
        getter.classList.add("error");
        valid = false;

    } else if(requireValue !== null && fieldValue > requireValue){

        alertMessage.textContent = "wrong format";
        getter.classList.add("error");
        valid = false;
    }
    else {

        alertMessage.textContent = "";
        getter.classList.remove("error");

    }
}

// FUNTION TO CHECK IF THE VALUES ARE CORRECT WHEN THE SUBMIT BUTTON IS CLICKED ENDS HERE

// FUNCTIOM THATS CHECKS EACH INPUT VALUES STARTS HERE 

function formValidation() {

    valid = true;

    validateField(userNameGetter, 0, /^[A-Za-z ]+$/,"letters",null,3,50);

    validateField(CardNumberGetter, 1, /^[0-9]+$/,"numbers",null,16,16);

    validateField(expMonthGetter, 2, /^[0-9]+$/,"numbers",12,2,2);

    validateField(expYearGetter, 3, /^[0-9]+$/,"numbers",null,2,2);

    validateField(cardCodeGetter, 4, /^[0-9]+$/,"numbers",null,3,3);

    return valid;
}
// FUNCTIOM THATS CHECKS EACH INPUT VALUES STARTS HERE 

// FUNCTION OF MESSAGE  THAT DISPLAY AFTER ALL THE INPUTS VALUE ARE VALID  STARTS HERE 
function feedBack() {

    feedBackMessage.style.display = "block";
    creditInfoContainer.style.display = "none";
}
// FUNCTION OF MESSAGE  THAT DISPLAY AFTER ALL THE INPUTS VALUE ARE VALID  ENDS  HERE 


// SUBMIT BUTTON FUNCTION TO CONFIRM VALIDITY STARTS HERE 

let infoValidator = document.getElementById("info-validator");

infoValidator.addEventListener("click", function () {

    if (formValidation()) {
        feedBack();
    }

});

// SUBMIT BUTTON FUNCTION TO CONFIRM VALIDITY ENDS HERE 

// FUNCTION TO RETURN ALL INPUTS AND THE PAGE BACK TO ITS DEFAULT STARTS HERE 

let continueBtn = document.getElementById("continue-btn");

continueBtn.addEventListener('click', function(){

    userName.textContent = "James Appleseed";
    cardNumberDisplayer.textContent = "0000 0000 0000 0000";
    expMonthDisplayer.textContent = "00";
    expYearDisplayer.textContent = "00";
    feedBackMessage.style.display = "none";
    creditInfoContainer.style.display = "block";

    for(x of infoGetters){
        x.value = "";
    }
})
// FUNCTION TO RETURN ALL INPUTS AND THE PAGE BACK TO ITS DEFAULT ENDS HERE 

